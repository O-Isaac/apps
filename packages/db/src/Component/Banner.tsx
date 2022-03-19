import { CSSProperties } from "react";
import "./Banner.css";

interface BannerProps {
    title?: string;
    description?: string;
    image?: string;
    background?: string;
}

export default function Banner(props: BannerProps) {
    const { title, image, description, background } = props;

    let backgroundStyle: CSSProperties = {};

    if (background) {
        backgroundStyle = {
            background: `
              linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), 
              url(${background}) center / cover no-repeat`,
        };
    }

    return (
        <section style={backgroundStyle} className="banner-container">
            <div className="title">
                <h1>{title}</h1>
                {description && (
                    <>
                        <hr />
                        <p>{description}</p>
                    </>
                )}
            </div>
            <div style={{ backgroundImage: `url(${image})` }} className="image-banner servant" />
        </section>
    );
}
