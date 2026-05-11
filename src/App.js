import "./App.css"
function GalleryLayout(props) {
  return (
    <div style={{backgroundColor: "pink",padding: "20px" }}>
    <div style={{ marginBottom: "20px"}} >
        {props.even}
      </div>

  
      <div style={{marginBottom: "20px" }}>
        {props.odd}
      </div>

      <div>
        {props.children}
      </div>

    </div>
  );
}

export default function App() {

  return (

    <GalleryLayout even={
        <ImageGroup
          images={[
           process.env.PUBLIC_URL + "/images.png",
                  process.env.PUBLIC_URL + "/images (1).png",
                   process.env.PUBLIC_URL +"/images (2).png",
               process.env.PUBLIC_URL +"/images (3).png",
                  process.env.PUBLIC_URL + "/images (1).png",
          ]}
        />
      }

      odd={
        <ImageGroup
          images={[
            
                process.env.PUBLIC_URL + "/images (5).png",
                 process.env.PUBLIC_URL +"/download.png",
                 process.env.PUBLIC_URL +  "/download (1).png",
          ]}
        />
      }

    >

      <ImageGroup
        images={[
               process.env.PUBLIC_URL +"/download (2).png",
               process.env.PUBLIC_URL +"/download (3).png",
              process.env.PUBLIC_URL + "/download (1).png",
               process.env.PUBLIC_URL +"/images.png",
        ]}
      />

    </GalleryLayout>

  );
}

function ImageGroup({ images }) {

  const isOdd = images.length % 2 !== 0;

  return (

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent:"center"
      }}
    >

      {images.map((img, index) => {

        const isLastImage =
          isOdd && index === images.length - 1;

        return (
          <img
            key={index}
            src={img}
            alt=""
            style={{
              width: isLastImage ? "100%" : "49%",
               height: isLastImage ? "400px" : "350px",
              objectFit: "cover"
            }}
          />
        );
      })}

    </div>

  );
}