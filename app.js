'use strict';
const date = new Date('2026-12-17T16:30:00+07:00');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateCountdown() {
  const remaining = Math.max(0, date.getTime() - Date.now());
  const total = Math.floor(remaining / 1000);
  const values = [Math.floor(total / 86400), Math.floor(total / 3600) % 24, Math.floor(total / 60) % 60, total % 60];
  ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, '0'));
  if (!remaining) document.getElementById('countdown-label').textContent = 'Our movie date has arrived. Enjoy our adventure. ♡';
}
updateCountdown(); setInterval(updateCountdown, 1000);
const dialog = document.getElementById('invite');
document.getElementById('open-invite').addEventListener('click', () => { dialog.showModal(); document.body.classList.add('modal-open'); });
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
document.getElementById('reveal').addEventListener('click', () => { dialog.close(); document.getElementById('mission').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' }); });
const accept = document.getElementById('accept');
const accepted = document.getElementById('accepted');
function showAccepted() { accept.hidden = true; accept.style.display = 'none'; accepted.hidden = false; }
try { if (localStorage.getItem('destiny-date-accepted') === 'yes') showAccepted(); } catch { /* The invitation also works with storage disabled. */ }
accept.addEventListener('click', () => {
  showAccepted();
  try { localStorage.setItem('destiny-date-accepted', 'yes'); } catch { /* Optional persistence. */ }
  if (!reducedMotion.matches) for (let i = 0; i < 30; i++) {
    const spark = document.createElement('span'); spark.className = 'spark'; spark.textContent = i % 3 ? '✦' : '♡';
    spark.style.cssText = `left:50%;top:65%;--x:${(Math.random() - .5) * innerWidth}px;--y:${-100 - Math.random() * 500}px`;
    document.body.appendChild(spark); setTimeout(() => spark.remove(), 1900);
  }
});
if (!reducedMotion.matches) for (let i = 0; i < 30; i++) {
  const particle = document.createElement('i'); particle.className = 'particle';
  particle.style.cssText = `left:${Math.random() * 100}%;top:${30 + Math.random() * 70}%;--duration:${8 + Math.random() * 12}s;--delay:${-Math.random() * 20}s`;
  document.getElementById('particles').appendChild(particle);
}
let audioContext; let soundOn = false;
const soundButton = document.getElementById('sound');
function soundState(enabled) { soundOn = enabled; soundButton.setAttribute('aria-pressed', String(enabled)); soundButton.setAttribute('aria-label', enabled ? 'Disable ambient sound' : 'Enable ambient sound'); soundButton.querySelector('span').textContent = enabled ? 'SOUND ON' : 'SOUND OFF'; }
soundButton.addEventListener('click', async () => {
  try {
    if (!audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) throw new Error('Audio unavailable');
      audioContext = new AudioContext(); const master = audioContext.createGain(); master.gain.value = .035; master.connect(audioContext.destination);
      [65.41, 98, 130.81, 196.00].forEach((frequency, i) => { const tone = audioContext.createOscillator(); const volume = audioContext.createGain(); tone.type = 'sine'; tone.frequency.value = frequency; volume.gain.value = i === 0 ? .7 : .2; tone.connect(volume); volume.connect(master); tone.start(); });
    }
    if (soundOn) { await audioContext.suspend(); soundState(false); } else { await audioContext.resume(); soundState(true); }
  } catch { soundButton.querySelector('span').textContent = 'UNAVAILABLE'; soundButton.disabled = true; }
});
document.addEventListener('visibilitychange', () => { if (document.hidden && audioContext && soundOn) { audioContext.suspend(); soundState(false); } });
