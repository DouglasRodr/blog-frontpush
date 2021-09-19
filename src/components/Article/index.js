import Post from '../Post/index';

const Article = () => {
    return (
        <section className="container">
            <h1>Article.js</h1>
            <div className="container-posts mt-5">
                <Post subtitle="Tecnologia" title="O guia definito sobre o blog.">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Ornare urna pharetra ut ac,
                    pellentesque. Ultricies habitasse
                    pretium purus viverra. Sit eget
                    volutpat semper vitae metus, 
                    fringilla ullamcoper sapien nibh.
                </Post>
                <Post subtitle="Fotografia" title="Quais as melhores câmeras em 2021?">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Ornare urna pharetra ut ac,
                    pellentesque. Ultricies habitasse
                    pretium purus viverra. Sit eget
                    volutpat semper vitae metus, 
                    fringilla ullamcoper sapien nibh.
                </Post>
                <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria.">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Ornare urna pharetra ut ac,
                    pellentesque. Ultricies habitasse
                    pretium purus viverra. Sit eget
                    volutpat semper vitae metus, 
                    fringilla ullamcoper sapien nibh.
                </Post>
            </div>            
        </section>        
    );
}

export default Article;