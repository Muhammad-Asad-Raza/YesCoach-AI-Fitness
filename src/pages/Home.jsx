import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // ── Auto-scroll phones track (infinite loop) ──
    const track = document.getElementById('phonesTrack');
    let animationFrameId;
    if (track) {
      const cards = Array.from(track.children);
      cards.forEach(card => track.appendChild(card.cloneNode(true)));

      let paused = false;
      let isDragging = false;
      let startX, scrollL;
      let speed = 0.6; 

      const autoScroll = () => {
        if (!paused && !isDragging) {
          track.scrollLeft += speed;
          const halfWidth = track.scrollWidth / 2;
          if (track.scrollLeft >= halfWidth) {
            track.scrollLeft = 0;
          }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
      };
      autoScroll();

      track.addEventListener('mouseenter', () => { paused = true; });
      track.addEventListener('mouseleave', () => { paused = false; isDragging = false; track.style.cursor = 'grab'; });

      track.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.pageX - track.offsetLeft;
        scrollL = track.scrollLeft;
        track.style.cursor = 'grabbing';
      });
      track.addEventListener('mouseup', () => { isDragging = false; track.style.cursor = 'grab'; });
      track.addEventListener('mousemove', e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        track.scrollLeft = scrollL - (x - startX) * 1.5;
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) track.scrollLeft = 0;
        if (track.scrollLeft < 0) track.scrollLeft = halfWidth - 1;
      });

      let touchStartX, touchScrollL;
      track.addEventListener('touchstart', e => { touchStartX = e.touches[0].pageX; touchScrollL = track.scrollLeft; paused = true; });
      track.addEventListener('touchend', () => { paused = false; });
      track.addEventListener('touchmove', e => {
        const x = e.touches[0].pageX;
        track.scrollLeft = touchScrollL - (x - touchStartX);
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) track.scrollLeft = 0;
        if (track.scrollLeft < 0) track.scrollLeft = halfWidth - 1;
      });

      track.style.cursor = 'grab';
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="page-container home-page">
      <section className="hero">
        <div className="orb orb-1"></div><div className="orb orb-2"></div><div className="orb orb-3"></div>
        <div className="hero-grid"></div>

        {/* Left tilted phone — Logo / Splash */}
        <div className="hero-phone hero-phone-left">
          <div className="hero-phone-inner">
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100%',gap:'20px',padding:'30px 20px'}}>
              <div style={{width:'72px',height:'72px',borderRadius:'22px',background:'linear-gradient(145deg,#00E091,#009958)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 12px 40px rgba(0,200,117,0.4)'}}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:'28px',fontWeight:'700',color:'white',letterSpacing:'-0.5px'}}>Yes<span style={{color:'#00C875'}}>Coach</span></div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)',letterSpacing:'2px',textTransform:'uppercase'}}>AI Personal Training</div>
              <div style={{position:'relative',marginTop:'8px'}}>
                <svg width="90" height="90" viewBox="0 0 90 90" style={{transform:'rotate(-90deg)'}}>
                  <circle cx="45" cy="45" r="35" fill="none" stroke="rgba(0,200,117,0.12)" strokeWidth="5"/>
                  <circle cx="45" cy="45" r="35" fill="none" stroke="#00C875" strokeWidth="5" strokeLinecap="round" strokeDasharray="220" strokeDashoffset="44" style={{animation:'heroRingAnim 2s ease 0.5s both'}}/>
                </svg>
                <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <span style={{fontSize:'22px',fontWeight:'800',color:'white',lineHeight:1}}>84</span>
                  <span style={{fontSize:'7px',color:'#00C875',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',marginTop:'2px'}}>Recovery</span>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',width:'100%',marginTop:'4px'}}>
                <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(0,200,117,0.12)',borderRadius:'10px',padding:'8px 10px'}}><div style={{fontSize:'8px',color:'rgba(255,255,255,0.4)',marginBottom:'3px'}}>😴 Sleep</div><div style={{fontSize:'14px',fontWeight:'800',color:'white'}}>7h 40</div><div style={{fontSize:'8px',color:'#00C875'}}>↑ Good</div></div>
                <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(0,200,117,0.12)',borderRadius:'10px',padding:'8px 10px'}}><div style={{fontSize:'8px',color:'rgba(255,255,255,0.4)',marginBottom:'3px'}}>💓 HRV</div><div style={{fontSize:'14px',fontWeight:'800',color:'white'}}>62ms</div><div style={{fontSize:'8px',color:'rgba(255,107,107,1)'}}>↓ 8%</div></div>
              </div>
              <div style={{background:'rgba(0,200,117,0.08)',border:'1px solid rgba(0,200,117,0.2)',borderRadius:'10px',padding:'10px 12px',width:'100%',fontSize:'9px',color:'rgba(0,224,145,0.9)',lineHeight:1.5,marginTop:'4px'}}>⚡ HRV down — volume reduced 20%. Focus on quality reps today.</div>
            </div>
          </div>
        </div>

        {/* Center text content */}
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="eyebrow-dot"></span>AI-Powered Personal Training</div>
          <h1 className="hero-title">Train Smarter.<br /><span className="line2">Recover Better.</span><span className="line3">Perform at your peak.</span></h1>
          <p className="hero-sub">YesCoach is your AI fitness coach that learns from your body data — HRV, sleep, recovery — and builds a plan that adapts to you, daily.</p>
          <div className="hero-actions">
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="store-btn-text"><span className="small">Download on the</span><span className="big">App Store</span></div>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76a2.47 2.47 0 0 1-.85-.62L13 12.5 3.33.87a2.47 2.47 0 0 1 .85-.63L15.5 12 3.18 23.76z" fill="#4CAF50"/><path d="M19.75 14.88L16.3 12.89 13 12.5l3.3-3.39 3.45-1.99A2.5 2.5 0 0 1 21 9.5v5a2.5 2.5 0 0 1-1.25 2.38z" fill="#FFD600"/><path d="M3.18.24L15.5 12 3.18 23.76C2.47 23.36 2 22.6 2 21.75V2.25C2 1.4 2.47.64 3.18.24z" fill="#FF3D00"/><path d="M16.3 11.11L3.18.24A2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 1.25.34l13.5 7.77-3.45 3z" fill="#FF3D00"/></svg>
              <div className="store-btn-text"><span className="small">Get it on</span><span className="big">Google Play</span></div>
            </a>
          </div>
        </div>

        {/* Right tilted phone — AI Coach Chat */}
        <div className="hero-phone hero-phone-right">
          <div className="hero-phone-inner">
            <div style={{padding:'18px 14px',display:'flex',flexDirection:'column',height:'100%'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'12px'}}>
                <div style={{fontFamily:"'Clash Display',sans-serif",fontSize:'14px',fontWeight:'700',color:'white'}}>Yes<span style={{color:'#00C875'}}>Coach</span></div>
                <div style={{width:'26px',height:'26px',borderRadius:'50%',background:'#00C875',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:'800',color:'#000'}}>M</div>
              </div>
              <div style={{fontSize:'8px',fontWeight:'700',color:'rgba(255,255,255,0.3)',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'10px'}}>AI COACH CHAT</div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px',flex:1}}>
                <div style={{display:'flex',gap:'8px',alignItems:'flex-end'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'linear-gradient(135deg,#00E091,#009958)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div style={{background:'rgba(0,200,117,0.08)',border:'1px solid rgba(0,200,117,0.15)',borderRadius:'10px 10px 10px 3px',padding:'8px 10px',fontSize:'10px',color:'white',lineHeight:1.5,maxWidth:'80%'}}>Good morning Marcus! HRV is down 8% — I've scaled today's session accordingly.</div>
                </div>
                <div style={{display:'flex',gap:'8px',alignItems:'flex-end',flexDirection:'row-reverse'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'#1a1a1a',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'9px',fontWeight:'700',color:'white'}}>M</div>
                  <div style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px 10px 3px 10px',padding:'8px 10px',fontSize:'10px',color:'white',lineHeight:1.5,maxWidth:'80%'}}>My shoulder is really sore from yesterday</div>
                </div>
                <div style={{display:'flex',gap:'8px',alignItems:'flex-end'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'linear-gradient(135deg,#00E091,#009958)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div style={{background:'rgba(0,200,117,0.08)',border:'1px solid rgba(0,200,117,0.15)',borderRadius:'10px 10px 10px 3px',padding:'8px 10px',fontSize:'10px',color:'white',lineHeight:1.5,maxWidth:'80%'}}>Got it — swapped overhead press for landmine rows. Shoulder flagged. Volume down 30%.</div>
                </div>
                <div style={{display:'flex',gap:'8px',alignItems:'flex-end',flexDirection:'row-reverse'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'#1a1a1a',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'9px',fontWeight:'700',color:'white'}}>M</div>
                  <div style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'10px 10px 3px 10px',padding:'8px 10px',fontSize:'10px',color:'white',lineHeight:1.5,maxWidth:'80%'}}>What's my plan for today?</div>
                </div>
                <div style={{display:'flex',gap:'8px',alignItems:'flex-end'}}>
                  <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'linear-gradient(135deg,#00E091,#009958)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div style={{background:'rgba(0,200,117,0.08)',border:'1px solid rgba(0,200,117,0.15)',borderRadius:'10px 10px 10px 3px',padding:'8px 10px',fontSize:'10px',color:'white',lineHeight:1.5,maxWidth:'80%'}}><strong style={{color:'#00C875'}}>Upper Pull · Scaled</strong> — 35 min, 4 exercises. Lat Pulldown 4×8, Row 3×10, Face Pulls 3×15.</div>
                </div>
              </div>
              <div style={{display:'flex',gap:'6px',alignItems:'center',marginTop:'10px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(0,200,117,0.15)',borderRadius:'20px',padding:'7px 8px 7px 12px'}}>
                <div style={{flex:1,fontSize:'9px',color:'rgba(255,255,255,0.3)'}}>Tell me anything…</div>
                <div style={{width:'22px',height:'22px',borderRadius:'50%',background:'#00C875',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHONE CAROUSEL */}
      <div className="phone-carousel-section">
        <div className="phones-track" id="phonesTrack">

          {/* Phone 1: Recovery Dashboard */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div className="ring-wrap" style={{position:'relative',display:'inline-block',width:'80px',height:'80px',margin:'0 auto 12px',display:'flex',justifyContent:'center'}}>
                  <svg width="80" height="80" viewBox="0 0 80 80" style={{transform:'rotate(-90deg)'}}><circle className="ring-track" cx="40" cy="40" r="32"/><circle className="ring-fill" cx="40" cy="40" r="32" style={{strokeDasharray:201,strokeDashoffset:30}}/></svg>
                  <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:'22px',fontWeight:'800',color:'var(--text)',lineHeight:1}}>84</span><span style={{fontSize:'7px',color:'var(--g)',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase'}}>Recovery</span></div>
                </div>
                <div className="ph-grid">
                  <div className="ph-met"><div className="ml">😴 Sleep</div><div className="mv">7h 40</div><div className="ms">↑ Good</div></div>
                  <div className="ph-met"><div className="ml">💓 HRV</div><div className="mv">62ms</div><div className="ms">↓ 8%</div></div>
                  <div className="ph-met"><div className="ml">❤️ Rest HR</div><div className="mv">52</div><div className="ms">Optimal</div></div>
                  <div className="ph-met"><div className="ml">🌡️ Temp</div><div className="mv">+0.1</div><div className="ms">Normal</div></div>
                </div>
                <div className="ph-card">
                  <div className="pc-lbl">Today's Workout</div>
                  <div className="pc-title">Upper Pull · Scaled</div>
                  <div className="pc-meta">⏱ 35 min · 💪 Strength · 4 exercises</div>
                  <div className="pc-actions"><button className="ph-btn primary">▶ Start</button><button className="ph-btn secondary">Details</button></div>
                </div>
                <div className="ph-insight">⚡ HRV is down — volume reduced 20%. Focus on quality reps.</div>
              </div>
            </div>
            <div className="phone-label">Recovery Dashboard</div>
          </div>

          {/* Phone 2: AI Coach "I'm tired" */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div style={{fontSize:'9px',fontWeight:'700',color:'var(--text3)',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'10px'}}>AI COACH CHAT</div>
                <div className="ph-chat">
                  <div className="msg-row">
                    <div className="msg-av ai">⚡</div>
                    <div className="bubble ai-b">Good morning Marcus. HRV is down 8% — ready to talk about today?</div>
                  </div>
                  <div className="msg-row user">
                    <div className="bubble user-b">I'm really tired, I can't work out today</div>
                    <div className="msg-av" style={{background:'#333',color:'var(--text)'}}>M</div>
                  </div>
                  <div className="msg-row">
                    <div className="msg-av ai">⚡</div>
                    <div className="bubble ai-b">Understood — rest logged. I've pushed today's upper pull to Thursday and lightened Wednesday. You need this.</div>
                  </div>
                  <div className="msg-row user">
                    <div className="bubble user-b">What's my plan for tomorrow then?</div>
                    <div className="msg-av" style={{background:'#333',color:'var(--text)'}}>M</div>
                  </div>
                  <div className="msg-row">
                    <div className="msg-av ai">⚡</div>
                    <div className="bubble ai-b">Tomorrow is active recovery — 20 min walk + mobility. No loading. Wednesday is Lower Push at reduced volume.</div>
                  </div>
                  <div className="ph-reply-chips">
                    <div className="ph-chip">Show full week</div>
                    <div className="ph-chip">Log sleep quality</div>
                  </div>
                </div>
                <div className="ph-input-row">
                  <div className="ph-input-txt">Tell me anything…</div>
                  <div className="ph-send"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                </div>
              </div>
            </div>
            <div className="phone-label">AI Coach — Adapts Instantly</div>
          </div>

          {/* Phone 3: What's my plan? */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div style={{fontSize:'9px',fontWeight:'700',color:'var(--text3)',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'10px'}}>AI COACH CHAT</div>
                <div className="ph-chat">
                  <div className="msg-row user">
                    <div className="bubble user-b">What's my plan for today?</div>
                    <div className="msg-av" style={{background:'#333',color:'var(--text)'}}>M</div>
                  </div>
                  <div className="msg-row">
                    <div className="msg-av ai">⚡</div>
                    <div className="bubble ai-b">Today: <strong style={{color:'var(--g)'}}>Upper Pull · Scaled</strong> — 35 min, 4 exercises. Pull-ups 4×8, Barbell Row 3×10, Face Pulls 3×15, Hammer Curls 3×12.</div>
                  </div>
                  <div className="msg-row user">
                    <div className="bubble user-b">My shoulder is sore from yesterday</div>
                    <div className="msg-av" style={{background:'#333',color:'var(--text)'}}>M</div>
                  </div>
                  <div className="msg-row">
                    <div className="msg-av ai">⚡</div>
                    <div className="bubble ai-b">Got it — swapped pull-ups for lat pulldowns and dropped row weight 15%. Shoulder flagged as active limiter.</div>
                  </div>
                  <div className="ph-reply-chips">
                    <div className="ph-chip">Start workout</div>
                    <div className="ph-chip">View exercises</div>
                    <div className="ph-chip">Rest today</div>
                  </div>
                </div>
                <div className="ph-input-row">
                  <div className="ph-input-txt">Tell me anything…</div>
                  <div className="ph-send"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                </div>
              </div>
            </div>
            <div className="phone-label">AI Coach — Smart Adjustments</div>
          </div>

          {/* Phone 4: Weekly Plan */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div style={{fontSize:'12px',fontWeight:'800',color:'var(--text)',marginBottom:'4px'}}>March 2026</div>
                <div className="date-wheel">
                  <div className="dw-day"><div className="dn">SAT</div><div className="dd">7</div><div className="dot"></div></div>
                  <div className="dw-day"><div className="dn">SUN</div><div className="dd">8</div><div className="dot" style={{background:'transparent'}}></div></div>
                  <div className="dw-day active"><div className="dn">MON</div><div className="dd">9</div><div className="dot"></div></div>
                  <div className="dw-day"><div className="dn">TUE</div><div className="dd">10</div><div className="dot"></div></div>
                  <div className="dw-day"><div className="dn">WED</div><div className="dd">11</div><div className="dot" style={{background:'transparent'}}></div></div>
                  <div className="dw-day"><div className="dn">THU</div><div className="dd">12</div><div className="dot"></div></div>
                </div>
                <div style={{fontSize:'11px',fontWeight:'800',color:'var(--text)',margin:'8px 0 6px'}}>Monday's Plan</div>
                <div className="plan-sessions">
                  <div className="plan-sess"><div className="ps-dot" style={{background:'var(--g)'}}></div><div className="ps-info"><div className="ps-name">Upper Pull · Scaled</div><div className="ps-meta">⏱ 35 min · 4 exercises</div></div><span className="ps-badge badge-today">TODAY</span></div>
                  <div className="plan-sess"><div className="ps-dot" style={{background:'#3B82F6'}}></div><div className="ps-info"><div className="ps-name">Lower Push</div><div className="ps-meta">⏱ 50 min · 5 exercises</div></div><span className="ps-badge badge-plan">TUE</span></div>
                  <div className="plan-sess"><div className="ps-dot" style={{background:'var(--text3)'}}></div><div className="ps-info"><div className="ps-name">Rest Day</div><div className="ps-meta">Active recovery</div></div><span className="ps-badge badge-plan">WED</span></div>
                  <div className="plan-sess"><div className="ps-dot" style={{background:'#8B5CF6'}}></div><div className="ps-info"><div className="ps-name">Full Body + Cardio</div><div className="ps-meta">⏱ 60 min · 6 exercises</div></div><span className="ps-badge badge-plan">THU</span></div>
                </div>
              </div>
            </div>
            <div className="phone-label">Dynamic Weekly Plan</div>
          </div>

          {/* Phone 5: Progress */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div style={{fontSize:'9px',color:'var(--text2)',marginBottom:'4px'}}>12 WEEKS IN</div>
                <div style={{fontSize:'18px',fontWeight:'800',color:'var(--text)',marginBottom:'14px'}}>Your Progress</div>
                <div className="progress-stats">
                  <div className="ps-stat"><div className="sv">87%</div><div className="sl">Consistency</div></div>
                  <div className="ps-stat"><div className="sv">34</div><div className="sl">Workouts</div></div>
                  <div className="ps-stat"><div className="sv">18</div><div className="sl">PRs Hit</div></div>
                </div>
                <div style={{fontSize:'10px',fontWeight:'700',color:'var(--text2)',marginBottom:'8px',letterSpacing:'.5px'}}>📌 PINNED METRICS</div>
                <div className="pin-grid-ph">
                  <div className="pin-card-ph"><div className="pc-lbl-p">Body Weight</div><div className="pc-val-p">182<span style={{fontSize:'11px'}}>lb</span></div><div className="pc-trend trend-up">↓ 4lb month</div></div>
                  <div className="pin-card-ph"><div className="pc-lbl-p">Pull-up Max</div><div className="pc-val-p">18<span style={{fontSize:'11px'}}>reps</span></div><div className="pc-trend trend-up">↑ 4 reps</div></div>
                  <div className="pin-card-ph"><div className="pc-lbl-p">Deadlift</div><div className="pc-val-p">315<span style={{fontSize:'11px'}}>lb</span></div><div className="pc-trend trend-up">↑ 15lb</div></div>
                  <div className="pin-card-ph"><div className="pc-lbl-p">5K Time</div><div className="pc-val-p">23:14</div><div className="pc-trend trend-up">↓ 1:22</div></div>
                </div>
                <div className="mini-bars">
                  <div className="mini-bar" style={{height:'55%'}}></div>
                  <div className="mini-bar" style={{height:'75%'}}></div>
                  <div className="mini-bar" style={{height:'40%'}}></div>
                  <div className="mini-bar" style={{height:'90%'}}></div>
                  <div className="mini-bar" style={{height:'70%'}}></div>
                  <div className="mini-bar" style={{height:'85%'}}></div>
                  <div className="mini-bar" style={{height:'95%'}}></div>
                  <div className="mini-bar highlight" style={{height:'45%'}}></div>
                </div>
              </div>
            </div>
            <div className="phone-label">Progress & PRs</div>
          </div>

          {/* Phone 6: Recovery Log */}
          <div className="phone-card">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="ph-topbar"><div className="ph-logo">Yes<span>Coach</span></div><div className="ph-avatar">M</div></div>
                <div style={{fontSize:'18px',fontWeight:'800',color:'var(--text)',marginBottom:'4px'}}>Log Recovery</div>
                <div style={{fontSize:'10px',color:'var(--text2)',marginBottom:'14px'}}>Tap to select what you did today</div>
                <div className="rec-log-list">
                  <div className="rec-log-item selected-r"><div className="rli-icon">🧊</div><div className="rli-name">Cold Plunge</div><div className="rli-check checked"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div></div>
                  <div className="rec-log-item"><div className="rli-icon">🔥</div><div className="rli-name">Sauna</div><div className="rli-check"></div></div>
                  <div className="rec-log-item selected-r"><div className="rli-icon">🧘</div><div className="rli-name">Mobility / Stretch</div><div className="rli-check checked"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div></div>
                  <div className="rec-log-item"><div className="rli-icon">💆</div><div className="rli-name">Massage</div><div className="rli-check"></div></div>
                  <div className="rec-log-item selected-r"><div className="rli-icon">💧</div><div className="rli-name">Hydration</div><div className="rli-check checked"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div></div>
                  <div className="rec-log-item"><div className="rli-icon">😴</div><div className="rli-name">Nap / Extra Sleep</div><div className="rli-check"></div></div>
                  <div className="rec-log-item"><div className="rli-icon">🚶</div><div className="rli-name">Active Walk</div><div className="rli-check"></div></div>
                </div>
                <button style={{marginTop:'14px',width:'100%',background:'var(--g)',color:'#000',border:'none',borderRadius:'10px',padding:'10px',fontSize:'12px',fontWeight:'700',fontFamily:"'Cabinet Grotesk',sans-serif",cursor:'none'}}>Log Recovery (3 selected)</button>
              </div>
            </div>
            <div className="phone-label">Recovery Logging</div>
          </div>
        </div>
      </div>

      {/* METRICS STRIP */}
      <div className="metrics-strip">
        <div className="metrics-track">
          <div className="metric-item"><span className="mi-val">50K+</span><div className="mi-lbl">Active Athletes</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">4.9★</span><div className="mi-lbl">App Store Rating</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">2M+</span><div className="mi-lbl">Workouts Logged</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">87%</span><div className="mi-lbl">Avg Consistency</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">340ms</span><div className="mi-lbl">HRV Improvement</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">50K+</span><div className="mi-lbl">Active Athletes</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">4.9★</span><div className="mi-lbl">App Store Rating</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">2M+</span><div className="mi-lbl">Workouts Logged</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">87%</span><div className="mi-lbl">Avg Consistency</div></div>
          <div className="metric-sep">·</div>
          <div className="metric-item"><span className="mi-val">340ms</span><div className="mi-lbl">HRV Improvement</div></div>
          <div className="metric-sep">·</div>
        </div>
      </div>

      {/* FEATURES PREVIEW */}
      <section id="features-preview">
        <div className="features">
          <div className="features-header reveal">
            <div className="section-label">What makes it different</div>
            <h2 className="section-title">Built around<br />your biology.</h2>
            <p className="section-sub">Every plan, every rep, every rest day — decided by AI that reads your body, not a cookie-cutter template.</p>
          </div>
          <div className="features-grid">
            <div className="feat-card large reveal">
              <div className="feat-icon">🤖</div>
              <h3>Conversational AI Coach</h3>
              <p>Just talk to it. Log a run, report soreness, say you're stressed — the AI listens, understands, and adjusts your plan in real time.</p>
              <div className="feat-visual">
                <div className="acp-msg"><div className="acp-avatar"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="acp-bubble">Good morning Marcus. HRV is down 8% — I've scaled today's session. Ready?</div></div>
                <div className="acp-msg acp-user"><div className="acp-bubble" style={{marginLeft:'auto'}}>My shoulder is sore from yesterday</div></div>
                <div className="acp-msg"><div className="acp-avatar"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="acp-bubble">Got it — swapped overhead press for landmine rows, reduced pull volume 30%. Your shoulder stays protected.</div></div>
              </div>
            </div>
            <div className="feat-card reveal reveal-delay-1"><div className="feat-icon">💓</div><h3>HRV-Driven Planning</h3><p>Syncs with Oura, WHOOP, Garmin and Apple Health. Your recovery score shapes every training decision automatically.</p></div>
            <div className="feat-card reveal"><div className="feat-icon">📅</div><h3>Dynamic Schedule</h3><p>A living calendar that reshuffles sessions around life — travel, bad sleep, missed days — without derailing long-term progress.</p></div>
            <div className="feat-card reveal reveal-delay-1"><div className="feat-icon">📊</div><h3>Progress Tracking</h3><p>Pinned metrics, PR history, body composition trends, and weekly charts — all automatically updated after each session.</p></div>
            <div className="feat-card reveal reveal-delay-2"><div className="feat-icon">🧬</div><h3>Biomarker Integration</h3><p>Upload lab results — testosterone, Vitamin D, cortisol — and the AI factors your biology directly into your plan.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section>
        <div className="how-section">
          <div className="reveal"><div className="section-label">Simple to start</div><h2 className="section-title">From install to<br/>first workout in minutes.</h2></div>
          <div className="steps">
            <div className="step reveal"><div className="step-num">01</div><h3>Set Your Goals</h3><p>Tell YesCoach what you want in plain language. It handles all the strategy.</p></div>
            <div className="step reveal reveal-delay-1"><div className="step-num">02</div><h3>Connect Devices</h3><p>Link Oura, Apple Health, Strava or Garmin. AI reads your body from day one.</p></div>
            <div className="step reveal reveal-delay-2"><div className="step-num">03</div><h3>Get Your Plan</h3><p>A fully personalised training block, built for you. Ready immediately.</p></div>
            <div className="step reveal reveal-delay-3"><div className="step-num">04</div><h3>Train & Adapt</h3><p>Your plan evolves with every session. The AI optimises week by week.</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="testimonials">
          <div className="reveal"><div className="section-label">What athletes say</div><h2 className="section-title">Real people.<br/>Real results.</h2></div>
          <div className="testi-grid">
            <div className="testi-card reveal"><div className="stars">★★★★★</div><p className="testi-text">"I've tried every fitness app out there. YesCoach is the first one that actually feels like having a coach — it knew I was overtraining before I did."</p><div className="testi-author"><div className="testi-av" style={{background:'#00C875'}}>A</div><div><div className="testi-name">Ahmed R.</div><div className="testi-sub">Strength athlete · 8 months</div></div></div></div>
            <div className="testi-card reveal reveal-delay-1"><div className="stars">★★★★★</div><p className="testi-text">"The HRV integration is insane. It literally told me to rest on a day I felt fine — turns out I was fighting a bug. Saved my whole week."</p><div className="testi-author"><div className="testi-av" style={{background:'#3B82F6'}}>S</div><div><div className="testi-name">Sara K.</div><div className="testi-sub">Marathon runner · 5 months</div></div></div></div>
            <div className="testi-card reveal reveal-delay-2"><div className="stars">★★★★★</div><p className="testi-text">"Deadlift went from 225 to 315 in 12 weeks. The progressive overload is dialled in perfectly. I don't think about programming anymore."</p><div className="testi-author"><div className="testi-av" style={{background:'#8B5CF6'}}>M</div><div><div className="testi-name">Marcus J.</div><div className="testi-sub">Powerlifter · 12 weeks</div></div></div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content reveal">
          <div className="section-label">Get started free</div>
          <h2 className="cta-title">Your best training<br/>starts <span>today.</span></h2>
          <p className="cta-sub">Download YesCoach free. Your first personalised training block is ready in under 3 minutes.</p>
          <div className="cta-stores">
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="store-btn-text"><span className="small">Download on the</span><span className="big">App Store</span></div>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76a2.47 2.47 0 0 1-.85-.62L13 12.5 3.33.87a2.47 2.47 0 0 1 .85-.63L15.5 12 3.18 23.76z" fill="#4CAF50"/><path d="M19.75 14.88L16.3 12.89 13 12.5l3.3-3.39 3.45-1.99A2.5 2.5 0 0 1 21 9.5v5a2.5 2.5 0 0 1-1.25 2.38z" fill="#FFD600"/><path d="M3.18.24L15.5 12 3.18 23.76C2.47 23.36 2 22.6 2 21.75V2.25C2 1.4 2.47.64 3.18.24z" fill="#FF3D00"/><path d="M16.3 11.11L3.18.24A2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 1.25.34l13.5 7.77-3.45 3z" fill="#FF3D00"/></svg>
              <div className="store-btn-text"><span className="small">Get it on</span><span className="big">Google Play</span></div>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
