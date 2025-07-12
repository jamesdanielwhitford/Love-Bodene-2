// src/components/content/PlaylistSection/PlaylistSection.tsx
import styles from './PlaylistSection.module.css'

export function PlaylistSection() {
  return (
    <section className={styles.playlistSection}>
      <h2>Listen With Me</h2>
      <div className={styles.playlistGrid}>
        <div className={styles.playlistItem}>
          <h3>Spotify</h3>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/your_playlist_id"
            width="100%"
            height="152"
            title="Spotify playlist"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>

        <div className={styles.playlistItem}>
          <h3>Apple Music</h3>
          <iframe
            title="Apple Music playlist"
            allow="autoplay *; encrypted-media *"
            height="150"
            style={{ width: '100%', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/playlist/your_playlist_id"
          />
        </div>

        <div className={styles.playlistItem}>
          <h3>SoundCloud</h3>
          <iframe
            width="100%"
            height="166"
            title="SoundCloud playlist"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/your_playlist_id&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
          />
        </div>
      </div>
    </section>
  )
}