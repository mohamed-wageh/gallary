import React from 'react'
import "./Home.css"
import "../../Component/Navbar/Navbar"
import Navbar from '../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer"
import Slider from '../../Component/Slider/Slider';
const Home = () => {
  const slides=[
    {url:"https://s3-alpha-sig.figma.com/img/5463/a996/0286245c5f1e3413c58dcb51517ad0b4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSbzk522-wgUBSrEurgdq6YpzXB5oYn~bzQZhB98wqzG3uYPGZF30AmAKfbsEHXSDJculud5TTQvO-y3OikKHKZ2a~uUr~HjF0yKX8kug0QzHMuS0vRCJ0uUa6TMNM0Fb2fQ8kJa95YroK~SUqcqHYKoNWqIcSetCPkwzmxPM6gGakKJ4j77OF-3h2AklCbUsAJMZwnrzuGmbgmylj54KA-2Q1IXdVErjS8L7ERQWLOXKnPUU-XmRlrvUB1GfNlVHDDwb3JcUsi31eM5vJKhAB7NyNBfuLrHHJIdfrSLdzUtE7SbsxE8Menfn3Z0ZNBEYwqmBeoF9iyCzJRc9howLg__" 
    ,title:"img1"      
    },
    {url:"https://s3-alpha-sig.figma.com/img/e069/ef47/d5ce7a8377f3d818c6480d68862354eb?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eFCzO6TkuBxy3Z-vVB9MCcM3Q7xBZOR4jqN3ZarYswNHXDWe~X9Pids5LOLErXAGqR~OG5ndf-knnktUZ4TI9iQmwHYeO1QwufPTw2OzcVox4qEEAU-Zu8Kx76K9C3I5NI4ujJFZZPzwi-Qs5h4OUYXwGX~omzlDkE3WvMhjG3xeUx2Tvfj9qOkFpyjvjwEf0bo85qYv2y~8zD2qQiB2xSBQwQf-6cyEkxU3-j6hx2vSIlazr9i277nXLGeGNbccmejnycIyKioDeR~1wmbLrSqJjcWkiLiJMA7Gl~lW5rFh7w60OhjQJigE670hnxeBIC7zpMz83NW9Vd4PQs3WAQ__" 
    ,title:"img2"      
    },
    {url:"https://s3-alpha-sig.figma.com/img/5463/a996/0286245c5f1e3413c58dcb51517ad0b4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSbzk522-wgUBSrEurgdq6YpzXB5oYn~bzQZhB98wqzG3uYPGZF30AmAKfbsEHXSDJculud5TTQvO-y3OikKHKZ2a~uUr~HjF0yKX8kug0QzHMuS0vRCJ0uUa6TMNM0Fb2fQ8kJa95YroK~SUqcqHYKoNWqIcSetCPkwzmxPM6gGakKJ4j77OF-3h2AklCbUsAJMZwnrzuGmbgmylj54KA-2Q1IXdVErjS8L7ERQWLOXKnPUU-XmRlrvUB1GfNlVHDDwb3JcUsi31eM5vJKhAB7NyNBfuLrHHJIdfrSLdzUtE7SbsxE8Menfn3Z0ZNBEYwqmBeoF9iyCzJRc9howLg__" 
    ,title:"img3"      
    },
    {url:"https://s3-alpha-sig.figma.com/img/4aac/f834/dbb5d12ef26336f1d0a8e0989807eb75?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-zjiRqhtkapE4BniSWvikmhjUQWUYH8m6L~1DX4SG1EMoXns~8UdwMue7kT-BqP~Ku8xxgG-VAOfFpNkHmoFWvamWg2zIrRQ4U2eX~VuB2zPoZL8oNwLQOgmZpcVSnK4o8w58qnhVVEe2wG6pj-g30GJlGcEDSiWq4FsevvcEtkLmTGDfg-9p4w7uXIaWzdpYGiW8i1ZfIGxbcYsPpO4GAtZi2e0IKMmKX-2KJ8wKn8IxAMAATpqHAbA4QO52Jjpop5TQ6VD6bA0xtHy9OMieuKsAMezEUWFToxYbTXVgRAhXkyYQyt5pHdgEytBoHfOFHSQY3gv9uA5y7Ql~h--Q__" 
    ,title:"img4"      
    },
  ]
  return (
    <>
    <Navbar />
      <div className='home'>
        <Slider slides={slides} />
      </div>
    
      <Footer />
    </>
  )
}

export default Home
