function Beer(props){
    const {id, getBeer} = props;
    const beer = getBeer(id);

    if (beer === undefined) {
        return <p>no beer :(</p>;
    }else return (
        <>
        <h3>Beer: {beer.name}</h3>
        <p>beer.description</p>
        </>
    );
}
export default Beer;