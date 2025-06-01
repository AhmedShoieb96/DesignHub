import video from"../../videos/Stad-Apartment-Promo.mp4"
export default function Video() {
  return (
    <div className="video-container">
    
      
   <video style={{width: '100%', height: 'auto'}} src={video} autoPlay loop muted/>
    </div>
  );
}