const PtvSports = () => {
    return <div className="channel">
        <iframe
            title="star-sports-english"
            src="https://pipcast.cc/embed.php?v=ptvpk&amp;vw=100%&amp;vh=100%"
            allowFullScreen={true}
            style={{
                position: "fixed", 
                width: '80%', 
                height: '90%', 
                overflow: 'hidden', 
                zIndex: 999999,
            }}
        />
    </div>
};

export default PtvSports;
