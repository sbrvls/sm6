

let news = [
    {
        title: 'title 1',
        date: '12.02.23',
        text: 'text1 text1 text1 text1 text1 text1',
        author: 'author_name1',
        id: '1',
    },

    {
        title: 'title 2',
        date: '22.02.23',
        text: 'text2 text2 text2 tex2 text2 text2',
        author: 'author_name2',
        id: '2',
    },

    {
        title: 'title 3',
        date: '32.02.23',
        text: 'text3 text3 text3 text3 text3 text3',
        author: 'author_name3',
        id: '3',
    },


]

let newsPlace = document.querySelector('.news')

news.forEach( x=> {
    newsPlace.insertAdjacentHTML ('beforeend', `
    <div class="news_item">
                    <div class="news_head">
                        <div class="news_name">${x.title}</div>
                        <div class="news_date">${x.date}</div>
                    </div>
                    
                    <div class="news_text">${x.text}
                    </div>
                    <div class="news_footer">
                        <div class="news_author">${x.author}</div>
                        <div class="news_id">id: ${x.id} </div>
                    </div>
                </div>
    `)
}
    )



    