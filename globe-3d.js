// Interactive 3D Earth Globe with Three.js
// Features photorealistic/clean satellite earth mapping, atmospheric rim glow,
// latitude/longitude graticules, global employment hubs, curved flight arcs, and interactive mouse rotation.

(function () {
  function initGlobe() {
    const container = document.getElementById('globe-canvas-container');
    if (!container) return;

    if (typeof THREE === 'undefined') {
      setTimeout(initGlobe, 50);
      return;
    }

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 280;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Root Globe Group for interactive rotation
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.22;
    globeGroup.rotation.y = -1.2; // Angle facing Europe, Atlantic & Americas
    scene.add(globeGroup);

    const GLOBE_RADIUS = 96;

    // 1. Realistic Earth Sphere Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('images/earth_map.jpg', () => {
      renderer.render(scene, camera);
    });
    earthTexture.generateMipmaps = true;
    earthTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.72,
      metalness: 0.08
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 2. Subtle translucent graticule grid lines over the Earth
    const graticuleMat = new THREE.LineBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.28
    });

    // Latitude rings
    const latBands = [-60, -30, 0, 30, 60];
    latBands.forEach(lat => {
      const phi = (90 - lat) * (Math.PI / 180);
      const ringRadius = (GLOBE_RADIUS + 0.3) * Math.sin(phi);
      const y = (GLOBE_RADIUS + 0.3) * Math.cos(phi);
      const segments = 64;
      const pts = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(theta) * ringRadius, y, Math.sin(theta) * ringRadius));
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      globeGroup.add(new THREE.Line(lineGeo, graticuleMat));
    });

    // Longitude rings
    const lonBands = [0, 60, 120, 180, 240, 300];
    lonBands.forEach(lon => {
      const theta = lon * (Math.PI / 180);
      const pts = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const phi = (i / segments) * Math.PI;
        const r = GLOBE_RADIUS + 0.3;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.cos(phi);
        const z = r * Math.sin(phi) * Math.sin(theta);
        pts.push(new THREE.Vector3(x, y, z));
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      globeGroup.add(new THREE.Line(lineGeo, graticuleMat));
    });

    // 3. Global Employment Hubs
    const hubs = [
      { name: 'London', lat: 51.5, lon: -0.1 },
      { name: 'Berlin', lat: 52.5, lon: 13.4 },
      { name: 'New York', lat: 40.7, lon: -74.0 },
      { name: 'San Francisco', lat: 37.7, lon: -122.4 },
      { name: 'Tokyo', lat: 35.6, lon: 139.6 },
      { name: 'Singapore', lat: 1.35, lon: 103.8 },
      { name: 'Sydney', lat: -33.8, lon: 151.2 },
      { name: 'Sao Paulo', lat: -23.5, lon: -46.6 },
      { name: 'Cape Town', lat: -33.9, lon: 18.4 }
    ];

    function latLonToVec3(lat, lon, radius) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    const hubMeshes = [];
    const pinGeo = new THREE.SphereGeometry(2.2, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0x2563eb });
    const innerDotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const innerDotGeo = new THREE.SphereGeometry(1.0, 16, 16);

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });

    hubs.forEach(hub => {
      const pos = latLonToVec3(hub.lat, hub.lon, GLOBE_RADIUS + 1.2);
      
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);

      const dot = new THREE.Mesh(innerDotGeo, innerDotMat);
      dot.position.copy(pos.clone().multiplyScalar(1.01));
      globeGroup.add(dot);

      const ringGeo = new THREE.RingGeometry(2.4, 4.2, 24);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(ring);
      hubMeshes.push({ ring });
    });

    // 4. Connecting 3D Arcs (Curved flight/payroll paths)
    const connections = [
      [0, 1], // London - Berlin
      [0, 2], // London - NYC
      [2, 3], // NYC - SF
      [0, 4], // London - Tokyo
      [1, 5], // Berlin - Singapore
      [5, 4], // Singapore - Tokyo
      [5, 6], // Singapore - Sydney
      [2, 7], // NYC - Sao Paulo
      [0, 8]  // London - Cape Town
    ];

    const arcMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      linewidth: 2
    });

    connections.forEach(([i1, i2]) => {
      const p1 = latLonToVec3(hubs[i1].lat, hubs[i1].lon, GLOBE_RADIUS + 1.2);
      const p2 = latLonToVec3(hubs[i2].lat, hubs[i2].lon, GLOBE_RADIUS + 1.2);

      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(GLOBE_RADIUS + Math.min(36, distance * 0.3));

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const arc = new THREE.Line(curveGeo, arcMat);
      globeGroup.add(arc);
    });

    // 5. Atmospheric Halo Outer Mesh
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS + 7, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.24, 0.58, 0.98, 1.0) * intensity * 0.8;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphere);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(200, 150, 220);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xbae6fd, 0.6);
    fillLight.position.set(-200, -80, -100);
    scene.add(fillLight);

    // 7. Interactive Drag Rotation
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0, y: 0.0022 };

    const domEl = renderer.domElement;

    domEl.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      prevMousePos = { x: e.clientX, y: e.clientY };

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;

      rotVelocity.y = deltaX * 0.003;
      rotVelocity.x = deltaY * 0.003;
    });

    // Touch support
    domEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;
    }, { passive: true });

    // Handle container resize
    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth || 480;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });

    // 8. Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging) {
        globeGroup.rotation.y += rotVelocity.y;
        globeGroup.rotation.x += rotVelocity.x;
        rotVelocity.y += (0.0018 - rotVelocity.y) * 0.04;
        rotVelocity.x += (0 - rotVelocity.x) * 0.04;
      }

      // Pulse beacon rings
      const pulseScale = 1 + 0.35 * Math.sin(elapsedTime * 3.5);
      hubMeshes.forEach(h => {
        h.ring.scale.set(pulseScale, pulseScale, 1);
      });

      renderer.render(scene, camera);
    }

    animate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
  } else {
    initGlobe();
  }
})();

