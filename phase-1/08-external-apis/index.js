document.querySelector('form').addEventListener('submit', youtubeSearch)

const API_KEY = ''

function youtubeSearch(e){
    e.preventDefault()
    console.log(e.target.search.value)
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${e.target.search.value}&type=video&videoDefinition=high&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
     data.items.forEach(buildAside)
        buildVideo(data.items[0])
    })
}

function buildVideo(video){
    console.log(video)
    let main = document.querySelector('main')
    let iframe = document.createElement('iframe')
    let info_container = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    main.innerHTML = ''
    main.id = 'main_video'
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    iframe.style.width = '800px'
    iframe.style.height = '500px'
    h1.innerText = video.snippet.title
    p.innerText = video.snippet.description
    info_container.id = 'info_container'
    info_container.append(h1,p)
    main.append(iframe,info_container)
}

function buildAside(video){
    console.log(video.snippet.thumbnails.default.url)
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.className = 'aside_videos'
    img.src = video.snippet.thumbnails.default.url
    div.appendChild(img)
    div.addEventListener('click',() => buildVideo(video) )
    document.querySelector('aside').appendChild(div)
}

// fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet
// &order=viewCount
// &q=skateboarding%20dog
// &type=video
// &videoDefinition=high&key=AIzaSyDRYid3DuC-wBwEtvZmHkM7BgPirPnfmis')
// .then(res => res.json())
// .then(data => console.log(data))

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
