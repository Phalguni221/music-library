<<<<<<< HEAD
import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
=======
import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
>>>>>>> 9c61c1af2113a896de6e880f2a5f3bf018418397
