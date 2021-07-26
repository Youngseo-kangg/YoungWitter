const Youngweet = ({weetsObj, isOwner}) => {
    <div>
        <h4>{weetsObj.text}</h4>
        {isOwner && (
            <>
                <button>Delete Yweet</button>
                <button>Edit Yweet</button>
            </>
        )}
    </div>
}

export default Youngweet