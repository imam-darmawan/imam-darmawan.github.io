import { useRef, useEffect, useState } from "react";
import Masonry from "masonry-layout";
import PropTypes from "prop-types";
import imagesLoaded from "imagesloaded";
import { clsx } from "clsx";

const Gallery = ({ works, filter }) => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isImageModalOpened, setIsImageModalOpened] = useState(false);

  const workListContainer = useRef();
  const modalImage = useRef();

  useEffect(() => {
    const masonryGallery = new Masonry(workListContainer.current, {
      itemSelector: "li",
      gutter: 20,
    });

    return () => {
      masonryGallery.destroy();
    };
  }, [filter, isImagesLoaded]);

  useEffect(() => {
    imagesLoaded(workListContainer.current, () => setIsImagesLoaded(true));
  }, []);

  const zoomInImage = (image) => {
    setIsImageModalOpened(true);
    modalImage.current.src = image;
  };

  const zoomOutImage = () => setIsImageModalOpened(false);

  return (
    <>
      {/* Gallery */}
      <ul className="-mr-5 mt-8" ref={workListContainer}>
        {works.map((work) => {
          return (
            <li
              key={work.image}
              className="mb-5 w-[calc(33.333333333%-20px)] cursor-zoom-in max-sm:w-[calc(50%-20px)]"
              onClick={() => zoomInImage(work.image)}
            >
              <img
                src={work.image}
                alt={work.category}
                className="h-full w-full rounded-[2rem]"
              />
              <small
                className="absolute bottom-0 left-0 right-0 m-4 inline-flex h-7 max-w-max items-center overflow-hidden text-nowrap rounded-2xl bg-stone-800/50 px-3.5 text-xs text-white"
                dir="rtl"
              >
                {work.category} - {work.date}
              </small>
            </li>
          );
        })}
      </ul>

      {/* Image modal */}
      <div
        className={clsx(
          "fixed inset-0 z-10 cursor-zoom-out bg-black/50 p-10 backdrop-blur-[2px] transition duration-300 max-sm:p-6",
          isImageModalOpened ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden="true"
        onClick={zoomOutImage}
      >
        <img src="" ref={modalImage} className="h-full w-full object-contain" />
      </div>
    </>
  );
};

Gallery.propTypes = {
  works: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Gallery;
