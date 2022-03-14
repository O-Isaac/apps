import "./Banner.css";

interface BannerProps {
  title?: string;
  description?: string;
  images: string[];
  type: "background" | "images";
}

export default function Banner(props: BannerProps) {
  const { title, images, type } = props;

  if (type === "images") {
    return (
      <section className="banner-flex">
        <div className="background-banner">
          {images.map((src, index) => {
            return (
              <figure key={index}>
                <img src={src} alt={"Banner Image #" + (index + 1)} />
              </figure>
            );
          })}
          <div id="dark-background" />

          {title && (
            <div id="page-title">
              <h1>{title}</h1>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (type === "background") {
    return (
      <section className="banner-flex">
        <div className="background-banner">
          <div
            style={{ background: `url(${images[0]})` }}
            id="dark-background"
          />

          {title && (
            <div id="page-title">
              <h1>{title}</h1>
            </div>
          )}
        </div>
      </section>
    );
  }

  return null
}
