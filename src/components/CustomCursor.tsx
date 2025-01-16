import React, { useEffect } from "react";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    // Adjustable Parameters
    const PARAMETERS = {
      cursor: {
        size: 8, // Radius of the circular cursor during movement
        stationarySize: 5, // Radius of the circular cursor when stationary
        outlineWidth: 2, // Width of the cursor outline
        outlineColor: "rgba(255, 255, 255, 0.8)", // Color of the cursor outline
        stationaryFadeTime: 500, // Time (ms) to transition to stationary size
      },
      particles: {
        count: 30, // Number of particles inside the energy ball
        size: 2.5, // Radius of each particle
        color: "rgba(0, 0, 0, OPACITY)", // Color of particles, OPACITY will be replaced dynamically
        velocityRange: [-2, 2], // Velocity range for particles
        lifeRange: [150, 20], // Lifespan range for particles (frames)
      },
      rope: {
        pointCount: 25, // Number of points in the trailing rope
        waveIntensity: 0, // Amplitude of rope oscillation
        waveSpeed: 0.1, // Speed of rope oscillation
        springStrength: 1, // Spring effect strength between points
        friction: 0.2, // Friction/damping for points
        maxLineWidth: 10, // Maximum width of the trailing rope
        gradientColors: [
          "rgba(0, 0, 0, 1)", // Start color (red)
          "rgba(0, 0, 0, 0.8)", // Mid color (orange)
          "rgba(0, 0, 0, 0)", // End color (yellow, transparent)
        ], // Gradient colors for fading tail
      },
      behavior: {
        smoothing: 0.9, // Smoothing factor for mouse movement
        particleDistance: 10, // Maximum distance from the cursor for particles
        stationaryDetectionThreshold: 69, // Time (ms) to detect mouse inactivity
      },
    };

    // Create canvas for custom cursor
    const canvas = document.createElement("canvas");
    canvas.id = "customCursorCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    let lastMouseMoveTime = Date.now();
    let currentCursorSize = PARAMETERS.cursor.size;

    // Initialize particles inside the energy ball
    const particles = Array.from(
      { length: PARAMETERS.particles.count },
      () => ({
        x: mouse.x,
        y: mouse.y,
        vx:
          Math.random() *
            (PARAMETERS.particles.velocityRange[1] -
              PARAMETERS.particles.velocityRange[0]) +
          PARAMETERS.particles.velocityRange[0],
        vy:
          Math.random() *
            (PARAMETERS.particles.velocityRange[1] -
              PARAMETERS.particles.velocityRange[0]) +
          PARAMETERS.particles.velocityRange[0],
        life:
          Math.random() *
            (PARAMETERS.particles.lifeRange[1] -
              PARAMETERS.particles.lifeRange[0]) +
          PARAMETERS.particles.lifeRange[0],
        maxLife:
          Math.random() *
            (PARAMETERS.particles.lifeRange[1] -
              PARAMETERS.particles.lifeRange[0]) +
          PARAMETERS.particles.lifeRange[0],
      })
    );

    // Initialize rope points
    const points = Array.from(
      { length: PARAMETERS.rope.pointCount },
      (_, i) => ({
        x: mouse.x,
        y: mouse.y,
        vx: 0,
        vy: 0,
        angle: (i / PARAMETERS.rope.pointCount) * Math.PI * 2,
      })
    );

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      lastMouseMoveTime = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateMouse = () => {
      mouse.x += (mouse.targetX - mouse.x) * PARAMETERS.behavior.smoothing;
      mouse.y += (mouse.targetY - mouse.y) * PARAMETERS.behavior.smoothing;

      // Adjust cursor size when stationary
      const now = Date.now();
      const timeSinceLastMove = now - lastMouseMoveTime;

      if (
        timeSinceLastMove > PARAMETERS.behavior.stationaryDetectionThreshold
      ) {
        currentCursorSize +=
          (PARAMETERS.cursor.stationarySize - currentCursorSize) *
          (1 -
            Math.exp(
              -timeSinceLastMove / PARAMETERS.cursor.stationaryFadeTime
            ));
      } else {
        currentCursorSize +=
          (PARAMETERS.cursor.size - currentCursorSize) *
          (1 -
            Math.exp(
              -timeSinceLastMove / PARAMETERS.cursor.stationaryFadeTime
            ));
      }
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= PARAMETERS.behavior.particleDistance) {
          const angle = Math.atan2(dy, dx);
          particle.x =
            mouse.x + Math.cos(angle) * PARAMETERS.behavior.particleDistance;
          particle.y =
            mouse.y + Math.sin(angle) * PARAMETERS.behavior.particleDistance;

          particle.vx *= -0.9;
          particle.vy *= -0.7;
        }

        particle.life -= 1;
        if (particle.life <= 0) {
          particle.x = mouse.x;
          particle.y = mouse.y;
          particle.vx =
            Math.random() *
              (PARAMETERS.particles.velocityRange[1] -
                PARAMETERS.particles.velocityRange[0]) +
            PARAMETERS.particles.velocityRange[0];
          particle.vy =
            Math.random() *
              (PARAMETERS.particles.velocityRange[1] -
                PARAMETERS.particles.velocityRange[0]) +
            PARAMETERS.particles.velocityRange[0];
          particle.life = particle.maxLife;
        }
      });
    };

    const updatePoints = () => {
      points[0].x = mouse.x;
      points[0].y = mouse.y;

      for (let i = 1; i < points.length; i++) {
        const dx = points[i - 1].x - points[i].x;
        const dy = points[i - 1].y - points[i].y;

        points[i].vx += dx * PARAMETERS.rope.springStrength;
        points[i].vy += dy * PARAMETERS.rope.springStrength;

        points[i].vx *= PARAMETERS.rope.friction;
        points[i].vy *= PARAMETERS.rope.friction;

        points[i].x += points[i].vx;
        points[i].y += points[i].vy;

        points[i].angle += PARAMETERS.rope.waveSpeed;
        points[i].y +=
          Math.sin(points[i].angle + i * PARAMETERS.rope.waveSpeed) *
          PARAMETERS.rope.waveIntensity;
      }
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        const opacity = particle.life / particle.maxLife;
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          PARAMETERS.particles.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = PARAMETERS.particles.color.replace(
          "OPACITY",
          `${opacity}`
        );
        ctx.fill();
      });
    };

    const drawRope = () => {
      if (points.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }

      const lastIndex = points.length - 1;
      ctx.quadraticCurveTo(
        points[lastIndex - 1].x,
        points[lastIndex - 1].y,
        points[lastIndex].x,
        points[lastIndex].y
      );

      // Create gradient for the rope
      const gradient = ctx.createLinearGradient(
        points[0].x,
        points[0].y,
        points[lastIndex].x,
        points[lastIndex].y
      );
      PARAMETERS.rope.gradientColors.forEach((color, idx) => {
        gradient.addColorStop(
          idx / (PARAMETERS.rope.gradientColors.length - 1),
          color
        );
      });

      ctx.strokeStyle = gradient;
      ctx.lineWidth = PARAMETERS.rope.maxLineWidth;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const drawCursor = () => {
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, currentCursorSize, 0, Math.PI * 2);
      ctx.strokeStyle = PARAMETERS.cursor.outlineColor;
      ctx.lineWidth = PARAMETERS.cursor.outlineWidth;
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawParticles();
      drawRope();
      drawCursor();
    };

    const animate = () => {
      updateMouse();
      updateParticles();
      updatePoints();
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default CustomCursor;
