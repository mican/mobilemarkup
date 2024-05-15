export default function Video({ id, title, ...props }) {
  return (
    <iframe
      className="w-full aspect-video pointer-events-none"
      src={'https://www.youtube.com/embed/' + id + '?controls=0&autoplay=1&mute=1&loop=1&playlist=' + id}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
