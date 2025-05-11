import './imageSlider.css'

export default function Image({ src, alt, className }) {
    const classes = `image ${className}`;
    return <img src={src} alt={alt} className={classes} />;
}