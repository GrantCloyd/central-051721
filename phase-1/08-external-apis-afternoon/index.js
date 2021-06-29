let form = document.querySelector('form')
form.addEventListener('submit',submitSearch)
console.log(form)

function submitSearch(e){
    e.preventDefault()
    console.log(e.target.search.value)
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${e.target.search.value}&key=[api_key]`)
    .then(res => res.json())
    .then(data => {
        buildVideo(data.items[0])
        document.querySelector('aside').innerHTML = ''
        data.items.forEach(buildSideVideo)
    })
}

function buildSideVideo(video){
    console.log(video)
    let aside = document.querySelector('aside')
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.className = 'aside_video'
    img.src = video.snippet.thumbnails.default.url 
    div.addEventListener('click', () => buildVideo(video) )
    div.append(img)
    aside.append(div)

}

function buildVideo(video){
    console.log(video)
    let main =  document.querySelector('main')
    main.innerHTML = ''
    let iframe = document.createElement('iframe')
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    main.id = 'main_video'
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    h1.textContent = video.snippet.title
    p.textContent = video.snippet.description


    iframe.style.width = '800px'
    iframe.style.height = '500px'

    div.append(h1,p)
    main.append(iframe,div)
}



