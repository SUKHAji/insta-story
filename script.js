let arr = [
  {
    dp: "https://images.unsplash.com/photo-1700431516632-507146465c65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1698862341365-cf4478f12332?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1696495683055-dae4291351f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1702165638296-5ecc7ab4cc4b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1698507574259-d29059cc5b9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1701651555094-c6894ccea543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1702009757735-3b26c92ba8b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1694618624660-aac1d45950a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1701542801052-3e66965e899a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1682687221363-72518513620e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1702076544677-3c7945cb8e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
  },
];

let clutter = "";
let storys = document.querySelector(".story-sec");

arr.forEach(function (elm, idx) {
  clutter += `<div class="circle-story">
    <img id="${idx}" src="${elm.dp}" alt="" />
  </div>`;
});

storys.innerHTML = clutter;

storys.addEventListener("click", (dets) => {
  document.querySelector(".fullsecStory").style.display = "block";
  document.querySelector(".fullsecStory").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(() => {
    document.querySelector(".fullsecStory").style.display = "none";
  }, 2000);
});
