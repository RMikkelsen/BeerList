function Beer(props){
    const {id, getBeer} = props;
    const beer = getBeer(id);

    if (beer === undefined) {
        return <p>What no beer? I'm thirsty :(</p>
    }else return (
        <>
        <h3>Beer: {beer.name}</h3>
        <p>{beer.description}</p>
        <p>{beer.image_url}</p>
        </>
    );
}
export default Beer;