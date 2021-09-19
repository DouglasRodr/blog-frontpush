import Post from '../Post/index';

const Article = () => {
    return (
        <section className="container">
            <h1>Article.js</h1>
            <div className="container-posts mt-5">
                <Post/>
                <Post/>
                <Post/>
            </div>            
        </section>        
    );
}

export default Article;