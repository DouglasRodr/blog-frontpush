const Post = () => {
    return (
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>Tecnologia</h5>
            <h3>O Guia definitivo do Blog</h3>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Ornare urna pharetra ut ac,
                pellentesque. Ultricies habitasse
                pretium purus viverra. Sit eget
                volutpat semper vitae metus, 
                fringilla ullamcoper sapien nibh.
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">Fulano de Tal</h6>
                    <p>
                        Aug 2, 2020 - 8 min read
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post;