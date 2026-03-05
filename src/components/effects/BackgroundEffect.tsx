export function BackgroundEffect() {
  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Gradient blobs */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      >
        {/* Primary blob - top left */}
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: '60vw',
            height: '60vw',
            maxWidth: '800px',
            maxHeight: '800px',
            top: '-20%',
            left: '-15%',
            background:
              'radial-gradient(circle, hsl(170 100% 44% / 0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Secondary blob - bottom right */}
        <div
          className="absolute rounded-full animate-blob-delay"
          style={{
            width: '50vw',
            height: '50vw',
            maxWidth: '700px',
            maxHeight: '700px',
            bottom: '-15%',
            right: '-10%',
            background:
              'radial-gradient(circle, hsl(240 100% 60% / 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Tertiary blob - center */}
        <div
          className="absolute rounded-full animate-blob-delay-2"
          style={{
            width: '40vw',
            height: '40vw',
            maxWidth: '500px',
            maxHeight: '500px',
            top: '40%',
            left: '35%',
            background:
              'radial-gradient(circle, hsl(170 100% 44% / 0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
    </>
  );
}
