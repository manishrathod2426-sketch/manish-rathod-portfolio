import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Database, Cpu, Activity, BarChart2 } from 'lucide-react';

export const DataCubeVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(2.8, 2.2, 4.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Master Cube Group
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    // 1. Procedural Grid Texture on Cube Faces (Luminous Data Grid)
    function createGridTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0a0a0f';
        ctx.fillRect(0, 0, 256, 256);

        // Grid lines
        ctx.strokeStyle = 'rgba(255, 38, 56, 0.45)';
        ctx.lineWidth = 2;
        const step = 32;
        for (let x = 0; x <= 256; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, 256);
          ctx.stroke();
        }
        for (let y = 0; y <= 256; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(256, y);
          ctx.stroke();
        }

        // Luminous active cell blocks
        ctx.fillStyle = '#FF2638';
        ctx.fillRect(64, 64, 32, 32);
        ctx.fillRect(160, 96, 32, 32);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(96, 160, 32, 32);

        // Borders
        ctx.strokeStyle = '#FF2638';
        ctx.lineWidth = 6;
        ctx.strokeRect(2, 2, 252, 252);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    const gridTex = createGridTexture();

    // 2. Main 3D Data Cube
    const boxGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const boxMat = new THREE.MeshStandardMaterial({
      map: gridTex,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x330005,
      emissiveIntensity: 0.5,
    });
    const mainCube = new THREE.Mesh(boxGeo, boxMat);
    cubeGroup.add(mainCube);

    // Outer wireframe cage
    const cageGeo = new THREE.BoxGeometry(1.85, 1.85, 1.85);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0xff2638,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    cubeGroup.add(cageMesh);

    // 3. Floating Connected Data Nodes around the Cube
    const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xff003c });
    const nodes: THREE.Mesh[] = [];

    const nodeOffsets = [
      [1.4, 0.6, 0.4],
      [-1.4, -0.5, 0.8],
      [0.2, 1.4, -0.6],
      [-0.4, -1.4, -0.4],
      [0.8, -0.8, 1.3],
    ];

    nodeOffsets.forEach((pos) => {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(pos[0], pos[1], pos[2]);
      cubeGroup.add(node);
      nodes.push(node);
    });

    // 4. Subtle lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xff2638, 3.0);
    dirLight.position.set(3, 4, 3);
    scene.add(dirLight);

    const blueRimLight = new THREE.PointLight(0x00e5ff, 2.0, 10);
    blueRimLight.position.set(-3, -2, -2);
    scene.add(blueRimLight);

    // Animation Loop
    let animId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      cubeGroup.rotation.y = t * 0.4;
      cubeGroup.rotation.x = Math.sin(t * 0.3) * 0.2 + 0.2;

      cageMesh.rotation.y = -t * 0.25;
      cageMesh.rotation.z = t * 0.15;

      nodes.forEach((node, idx) => {
        const pulse = 1 + Math.sin(t * 3 + idx) * 0.25;
        node.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      boxGeo.dispose();
      boxMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      gridTex.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-xl bg-[#070707] border border-[#FF2638]/30 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab" />

      {/* Futuristic Telemetry HUD */}
      <div className="absolute top-4 left-4 p-2.5 rounded bg-[#0d0d0f]/90 border border-[#FF2638]/40 backdrop-blur-md font-mono text-[10px] text-zinc-300 pointer-events-none">
        <div className="flex items-center gap-1.5 text-[#FF2638] font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>DATAMIND // DETERMINISTIC CUBE</span>
        </div>
        <div className="text-zinc-500 text-[9px] mt-0.5">MATRIX: 14.2K RECORDS &bull; 18 FEATURES</div>
      </div>

      <div className="absolute bottom-4 right-4 p-2 rounded bg-[#111111]/90 border border-white/10 font-mono text-[10px] text-zinc-400 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00E5FF]" />
        <span>REPRODUCIBLE ML // SEED 42</span>
      </div>
    </div>
  );
};
