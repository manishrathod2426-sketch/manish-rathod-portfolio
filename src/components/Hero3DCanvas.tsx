import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software rendering
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070707, 0.035);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Procedural texture generator for HUD labels / floating code symbols
    function createSymbolTexture(text: string, color = '#FF2638', bgColor = 'rgba(7,7,7,0.85)') {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 256, 256);

        // Border
        ctx.strokeStyle = color;
        ctx.lineWidth = 8;
        ctx.strokeRect(8, 8, 240, 240);

        // Corner accents
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(8, 8, 24, 6);
        ctx.fillRect(8, 8, 6, 24);
        ctx.fillRect(224, 242, 24, 6);
        ctx.fillRect(242, 224, 6, 24);

        // Text
        ctx.font = 'bold 84px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(text, 128, 128);

        // Glow line
        ctx.fillStyle = color;
        ctx.fillRect(30, 185, 196, 6);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      return tex;
    }

    // Master Group
    const engineGroup = new THREE.Group();
    scene.add(engineGroup);

    // 1. Central Core: Dual Layer Geodesic Sphere
    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 3);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.1,
      metalness: 0.95,
      emissive: 0x660000,
      emissiveIntensity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    engineGroup.add(innerMesh);

    // Outer lattice wireframe/metallic shell
    const outerGeo = new THREE.IcosahedronGeometry(1.45, 1);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xff2638,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xff003c,
      emissiveIntensity: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, wireMat);
    engineGroup.add(outerMesh);

    // Floating pulsing energy sphere inside
    const energyGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const energyMat = new THREE.MeshBasicMaterial({
      color: 0xff003c,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const energyMesh = new THREE.Mesh(energyGeo, energyMat);
    engineGroup.add(energyMesh);

    // 2. Orbital Rings with glowing neon red lines
    const createRing = (radius: number, rotation: [number, number, number], color = 0xff2638) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.015, radius + 0.015, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.set(...rotation);
      return ringMesh;
    };

    const ring1 = createRing(2.2, [Math.PI / 3, 0.2, 0]);
    const ring2 = createRing(2.6, [Math.PI / 2.2, 0.8, 0.4], 0xff4d5d);
    const ring3 = createRing(3.0, [0.3, Math.PI / 4, 0.6], 0xff003c);
    engineGroup.add(ring1);
    engineGroup.add(ring2);
    engineGroup.add(ring3);

    // 3. Floating Functional Satellites (Code, DB, API, Deploy)
    const satellitesGroup = new THREE.Group();
    engineGroup.add(satellitesGroup);

    // Satellite A: Database Node (Cylinder with glowing stripes)
    const dbGroup = new THREE.Group();
    const dbGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.45, 16);
    const dbMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f24,
      metalness: 0.9,
      roughness: 0.2,
    });
    const dbMesh = new THREE.Mesh(dbGeo, dbMat);
    dbGroup.add(dbMesh);

    const stripeGeo = new THREE.TorusGeometry(0.25, 0.018, 8, 24);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xff2638 });
    const s1 = new THREE.Mesh(stripeGeo, stripeMat);
    s1.rotation.x = Math.PI / 2;
    s1.position.y = 0.1;
    const s2 = new THREE.Mesh(stripeGeo, stripeMat);
    s2.rotation.x = Math.PI / 2;
    s2.position.y = -0.1;
    dbGroup.add(s1);
    dbGroup.add(s2);
    satellitesGroup.add(dbGroup);

    // Satellite B: Holographic Code Node ({})
    const codePlaneGeo = new THREE.PlaneGeometry(0.55, 0.55);
    const codeTex1 = createSymbolTexture('{}');
    const codeMat1 = new THREE.MeshBasicMaterial({
      map: codeTex1,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const codeMesh1 = new THREE.Mesh(codePlaneGeo, codeMat1);
    satellitesGroup.add(codeMesh1);

    // Satellite C: Terminal Node (</>)
    const codeTex2 = createSymbolTexture('</>');
    const codeMat2 = new THREE.MeshBasicMaterial({
      map: codeTex2,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const codeMesh2 = new THREE.Mesh(codePlaneGeo, codeMat2);
    satellitesGroup.add(codeMesh2);

    // Satellite D: API Node
    const apiTex = createSymbolTexture('API');
    const apiMat = new THREE.MeshBasicMaterial({
      map: apiTex,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const apiMesh = new THREE.Mesh(codePlaneGeo, apiMat);
    satellitesGroup.add(apiMesh);

    // Satellite E: Terminal prompt node ($_ )
    const promptTex = createSymbolTexture('$_');
    const promptMat = new THREE.MeshBasicMaterial({
      map: promptTex,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const promptMesh = new THREE.Mesh(codePlaneGeo, promptMat);
    satellitesGroup.add(promptMesh);

    // 4. Atmospheric Particles (Red and Soft White)
    const particleCount = isSoftwareGl ? 80 : 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const redColor = new THREE.Color(0xff2638);
    const darkRedColor = new THREE.Color(0x990015);
    const whiteColor = new THREE.Color(0xf5f5f5);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.3 ? (Math.random() > 0.5 ? redColor : darkRedColor) : whiteColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    engineGroup.add(particleSystem);

    // 5. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x1a1a1a, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff3344, 2.8);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xff003c, 3.5, 12);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-3, 3, 3);
    scene.add(fillLight);

    // Mouse Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.45;
      targetMouseY = y * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Exponential damping for silky mouse parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Rotate central components
      innerMesh.rotation.y = elapsedTime * 0.22;
      innerMesh.rotation.x = elapsedTime * 0.12;

      outerMesh.rotation.y = -elapsedTime * 0.15;
      outerMesh.rotation.z = elapsedTime * 0.18;

      energyMesh.rotation.x = elapsedTime * 0.4;
      energyMesh.rotation.y = elapsedTime * 0.3;
      const scale = 0.95 + Math.sin(elapsedTime * 2.5) * 0.08;
      energyMesh.scale.set(scale, scale, scale);

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.3;
      ring3.rotation.z = elapsedTime * 0.18;

      // Orbit satellites smoothly
      // A. Database node
      const dbAngle = elapsedTime * 0.6;
      dbGroup.position.set(Math.cos(dbAngle) * 2.2, Math.sin(dbAngle * 0.5) * 0.6, Math.sin(dbAngle) * 2.2);
      dbGroup.rotation.y = elapsedTime * 0.8;

      // B. Code node {}
      const codeAngle1 = elapsedTime * 0.45 + Math.PI * 0.6;
      codeMesh1.position.set(Math.cos(codeAngle1) * 2.6, Math.sin(codeAngle1) * 0.8, Math.sin(codeAngle1) * 2.6);
      codeMesh1.lookAt(camera.position);

      // C. Code node </>
      const codeAngle2 = -elapsedTime * 0.5 + Math.PI * 1.3;
      codeMesh2.position.set(Math.cos(codeAngle2) * 2.8, Math.sin(codeAngle2 * 1.2) * 0.9, Math.sin(codeAngle2) * 2.8);
      codeMesh2.lookAt(camera.position);

      // D. API Node
      const apiAngle = elapsedTime * 0.35 + Math.PI;
      apiMesh.position.set(Math.cos(apiAngle) * 3.1, Math.cos(apiAngle * 0.8) * 0.7, Math.sin(apiAngle) * 3.1);
      apiMesh.lookAt(camera.position);

      // E. Prompt Node $_
      const promptAngle = -elapsedTime * 0.4 + Math.PI * 0.2;
      promptMesh.position.set(Math.cos(promptAngle) * 2.4, Math.sin(promptAngle * 0.7) * 0.6, Math.sin(promptAngle) * 2.4);
      promptMesh.lookAt(camera.position);

      // Rotate particles
      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = elapsedTime * 0.02;

      // Parallax rotation on master group
      engineGroup.rotation.y = currentMouseX;
      engineGroup.rotation.x = -currentMouseY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      wireMat.dispose();
      energyGeo.dispose();
      energyMat.dispose();
      dbGeo.dispose();
      dbMat.dispose();
      stripeGeo.dispose();
      stripeMat.dispose();
      codePlaneGeo.dispose();
      codeTex1.dispose();
      codeMat1.dispose();
      codeTex2.dispose();
      codeMat2.dispose();
      apiTex.dispose();
      apiMat.dispose();
      promptTex.dispose();
      promptMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[420px] lg:min-h-[580px] flex items-center justify-center ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Cyber HUD Overlay elements surrounding the 3D core */}
      <div className="absolute top-4 right-4 pointer-events-none flex flex-col items-end gap-1 font-mono text-[10px] text-zinc-500">
        <div className="flex items-center gap-1.5 text-[#FF2638]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2638] shadow-[0_0_8px_#FF2638]" />
          <span>3D_ENGINE // ACTIVE</span>
        </div>
        <div className="text-zinc-600">FPS: STABLE 60 // PBR SHADING</div>
        <div className="text-zinc-600">CORE: GEODESIC_RED_V4</div>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none font-mono text-[10px] text-zinc-500 flex items-center gap-2">
        <span className="text-[#FF2638] font-bold">[INTERACTIVE]</span>
        <span>DRAG TO ROTATE &bull; TRACKING CURSOR</span>
      </div>
    </div>
  );
};
