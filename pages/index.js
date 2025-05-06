import React from "react";
import Link from "next/link";
import Image from "next/image";

import img from "../public/img-2.jpg";

const Home = () => {
  // console.log(img);
  return (
    <div>
      {/* <div className={styles.text}>Home</div> */}
      {/* <h1 className="title">Styled CSS</h1> */}
      <div style={{ position: "relative", width: "800px", height: "500px" }}>
        <Image src={img} alt="Example Image" layout="fill" />
      </div>
      {/* Remote Image  */}
      <Image
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" // Image in the public/ folder
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
        // priority
      />
      <Image
        src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" // Image in the public/ folder
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
        // priority
        loading="eager"
      />
      <Image
        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" // Image in the public/ folder
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
        // priority
      />

      <br></br>
      {/* Local Image  */}
      <Image
        src={img}
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
        // loading="eager"
      />
      <Image
        src={img}
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
      />
      <Image
        src={img}
        alt="Example Image"
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJhJREFUGFcFwcEOwTAAgOG/tk6tnVZsC7YscdiBZ5DwJk5OHtcLCImICEF2QKy+T2w3ax+oBKUUKupS5g4izbERHC43xHK18HlqCWXAbDqhKkYk/Zy2o7g+GkQ9H/uhM5i4Ry/6UpcWHxc825z764PICu0TLclSiVUdqoHGOMPu5Dlefogkld5ZgYlDolZitWSUhbTA/vzmD362JSwSQ5JdAAAAAElFTkSuQmCC" // Add base64-encoded placeholder
      />

      <br></br>
      <Link href="/products">Products</Link>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
