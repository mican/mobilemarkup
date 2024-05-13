import { Image as DatoImage } from 'react-datocms'
import classNames from 'classnames'

import styles from './image.module.sass'

// Render inline SVG with fallback non-svg images
export default function Image({ image, className, alt }) {
  if (!image) {
    return ''
  }
  if (image.svg) {
    return <div className={classNames(styles.icon, className)} dangerouslySetInnerHTML={{ __html: image.svg.content }} />
  }
  if (image.url) {
    return <img className={classNames(styles.image, className)} src={image.url} alt={image.title} />
  }
  if (image.responsiveImage) {
    return <DatoImage lazyLoad={true} className={classNames('image', styles.image, className)} data={image.responsiveImage} />
  }

  // If none of the above conditions are met, just log the image
  return (
    <div>
      <pre>{JSON.stringify(image, null, 2)}</pre>
    </div>
  )
}
