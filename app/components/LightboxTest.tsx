"use client"

import { useEffect } from "react"
import Image from "next/image"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"

const images = [
  {
    src: "https://images.ctfassets.net/1ifsz1odwve9/7kSvmxMsj1YtpYIGSTwC8W/feb7c6e9b324bedc0e6f6b1d3cce653c/la-casa-3.jpg",
    alt: "La casa 1",
  },
  {
    src: "https://images.ctfassets.net/1ifsz1odwve9/2ZdIlK2PIv61h9EK8usQ2c/34ab88556bd0536755bd8b844716509b/la-casa-2.jpg",
    alt: "La casa 2",
  },
  {
    src: "https://images.ctfassets.net/1ifsz1odwve9/6PVPDersCdyAcqIMeRpcKl/f7f2b974b8e7b892e95434fc84425748/la-casa-1.jpg",
    alt: "La casa 3",
  },
]

export default function LightboxTest() {
  useEffect(() => {
    initLightboxJS("", "Individual")
  }, [])

  return (
    <SlideshowLightbox
      lightboxIdentifier="lightbox1"
      framework="next"
      images={images}
      theme="dark"
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          height={500}
          width={500}
          data-lightboxjs="lightbox1"
          quality={80}
        />
      ))}
    </SlideshowLightbox>
  )
}
