import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, X, Loader2, AlertCircle, Library, SkipForward, SkipBack } from 'lucide-react';

const MusicPlayer = ({ isOpen, onClose }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [status, setStatus] = useState('idle'); // idle, loading, playing, error
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);

  const localTracks = [
    { title: 'Bargad', file: '/music/bargad.mp3' },
    { title: 'About You', file: '/music/AboutYou.mp3' },
    { title: 'Bye', file: '/music/bye.mp3' },

  ];

  // Helper to format time
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Initialize Audio object once and keep it persistent
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(localTracks[currentTrackIndex].file);
      audioRef.current.volume = volume;

      // Audio Event Listeners
      audioRef.current.onplay = () => {
        setPlaying(true);
        setStatus('playing');
      };
      audioRef.current.onpause = () => setPlaying(false);
      audioRef.current.onwaiting = () => setStatus('loading');
      audioRef.current.oncanplay = () => {
        setStatus('idle');
        setDuration(audioRef.current.duration);
      };
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
      audioRef.current.onerror = () => setStatus('error');
      audioRef.current.onended = () => handleNext();
    }

    // Visibility Change Logic: Pause music when user leaves the tab
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.error("Playback failed:", e);
          setStatus('error');
        });
      }
    }
  };

  const handleTrackSelect = (index) => {
    if (audioRef.current) {
      setCurrentTrackIndex(index);
      audioRef.current.src = localTracks[index].file;
      audioRef.current.load();
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % localTracks.length;
    handleTrackSelect(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentTrackIndex - 1 + localTracks.length) % localTracks.length;
    handleTrackSelect(prevIndex);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-6 z-[100] w-80 brutal-card bg-surface p-6 border-4 border-black transition-all duration-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b-2 border-current pb-2">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Music className={`w-4 h-4 text-accent transition-colors duration-500 ${playing ? 'animate-bounce' : ''}`} />
                  {status === 'loading' && (
                    <Loader2 className="w-4 h-4 text-accent animate-spin absolute inset-0" />
                  )}
                </div>
                <span className="font-display text-xs uppercase tracking-widest text-text transition-colors duration-500">
                  Local_Audio_Station
                </span>
              </div>
              <button onClick={onClose} className="hover:text-accent transition-colors text-text transition-colors duration-500">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Library View */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-bold uppercase text-accent tracking-[0.2em] flex items-center gap-2">
                    <Library className="w-3 h-3" /> Track_Library
                  </div>
                  {status === 'error' && (
                    <span className="text-[8px] text-red-500 font-bold uppercase flex items-center gap-1">
                      <AlertCircle className="w-2 h-2" /> Playback_Error
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  {localTracks.map((track, i) => (
                    <button
                      key={i}
                      onClick={() => handleTrackSelect(i)}
                      className={`w-full text-left p-3 border-2 transition-all flex justify-between items-center group ${currentTrackIndex === i ? 'border-accent bg-accent/5' : 'border-black/10 hover:border-black/30'}`}
                    >
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase ${currentTrackIndex === i ? 'text-accent' : 'text-text'}`}>
                          {track.title}
                        </span>
                        <span className="text-[8px] opacity-40 font-mono">ID: 00{i + 1}</span>
                      </div>
                      {currentTrackIndex === i && playing && (
                        <div className="flex gap-0.5 items-end h-3">
                          <div className="w-0.5 bg-accent animate-[bounce_0.6s_infinite_0s]"></div>
                          <div className="w-0.5 bg-accent animate-[bounce_0.6s_infinite_0.2s]"></div>
                          <div className="w-0.5 bg-accent animate-[bounce_0.6s_infinite_0.4s]"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls Section */}
              <div className="bg-text/5 p-4 border-2 border-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20"></div>
                
                <div className="flex flex-col gap-4">
                  {/* Timeline / Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[8px] font-mono opacity-50 uppercase tracking-widest">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full accent-accent bg-background h-1 appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-6">
                    <button 
                      onClick={handlePrev}
                      className="text-text hover:text-accent transition-colors"
                    >
                      <SkipBack className="w-5 h-5" />
                    </button>
                    
                    <button 
                      onClick={togglePlay}
                      className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-on-accent border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    >
                      {playing ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                    </button>

                    <button 
                      onClick={handleNext}
                      className="text-text hover:text-accent transition-colors"
                    >
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="text-[8px] font-bold text-accent uppercase tracking-widest">Master_Gain</div>
                      <span className="text-[8px] font-mono opacity-50">{Math.round(volume * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-full accent-accent bg-background h-1 appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              {/* Metadata */}
              <div className="text-[8px] font-bold text-text-muted text-center uppercase tracking-[0.2em]">
                // Track: {localTracks[currentTrackIndex].title} <br />
                // Status: {status === 'playing' ? 'ACTIVE_STREAM' : status.toUpperCase() + '_IDLE'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
