

const PostItem = () => {
    return (
        <div className="post-item">
            <img src="https://cdn-ov1.hachium.com/6658b9fc85f4057438ff6ace48582306/1587459660701.png" style={{ width: "200px" }}></img>
            <h2>Học HTML/CSS</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="posts-list">
        <PostItem />
        <PostItem />
        <PostItem />
    </div>
)
