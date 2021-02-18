import './CustomImage.scss';

export default function CustomImage(props) {
    return (
        <img className='CustomImage' src={props.src} />
    );
}