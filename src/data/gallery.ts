import type { CarouselImage } from "@/components/ImageCarousel";

const galleryEntry = (src: string): CarouselImage => ({
  src: `/gallery/${src}`,
  alt: "Plastering project",
  title: "Project Gallery",
});

/**
 * Gallery images from /public/gallery/. Use .jpg paths for fast loading.
 * When you add new HEIC files, run: npm run convert-heic
 * Then add the generated .jpg filenames here.
 */
export const commercialGalleryImages: CarouselImage[] = [
  galleryEntry("214779003456765065.JPG"),
  galleryEntry("3654469973688396740.JPG"),
  galleryEntry("4167928594750567462.JPG"),
  galleryEntry("5357785908377352352.JPG"),
  galleryEntry("5888605367363471105.JPG"),

  galleryEntry("6016622430093755601.JPG"),
  galleryEntry("9042096028579107964.JPG"),
  galleryEntry("IMG_2328.jpg"),
  galleryEntry("IMG_2329.jpg"),
  galleryEntry("IMG_2330.jpg"),
  galleryEntry("IMG_2379.jpg"),
  galleryEntry("IMG_4842.jpg"),
  galleryEntry("IMG_4843.jpg"),
  galleryEntry("IMG_4844.jpg"),
  galleryEntry("IMG_4845.jpg"),
  galleryEntry("IMG_4846.jpg"),
  galleryEntry("IMG_4848.jpg"),
  galleryEntry("IMG_4849.jpg"),
  galleryEntry("IMG_4851.jpg"),
];

export const residentialGalleryImages: CarouselImage[] = [
  galleryEntry("5909118591903714684.JPG"),
  galleryEntry("8709369014412488857.JPG"),
  galleryEntry("IMG_0511.jpg"),
  galleryEntry("IMG_0512.jpg"),
  galleryEntry("IMG_0515.jpg"),
  galleryEntry("IMG_0517.jpg"),
  galleryEntry("IMG_1681.jpg"),
  galleryEntry("IMG_1684.jpg"),
  galleryEntry("IMG_1685.jpg"),
  galleryEntry("IMG_2048.jpg"),
  galleryEntry("IMG_2049.jpg"),
  galleryEntry("70544575451__6456FE5D-46BC-459C-9E39-0C962C62A3D5.jpg"),
  galleryEntry("71337712281__7A877D41-4810-43B7-9EBA-64AD3F29597A.jpg"),
  galleryEntry("IMG_0055.jpg"),
  galleryEntry("IMG_0056.jpg"),
  galleryEntry("IMG_0057.jpg"),
  galleryEntry("IMG_0061.jpg"),
  galleryEntry("IMG_0062.jpg"),
  galleryEntry("IMG_0064.jpg"),
  galleryEntry("IMG_0065.jpg"),
  galleryEntry("IMG_0066.jpg"),
];
