import style from './Card.module.css';


function Card (props: any) {

    // const classes = 'card ' + props.className;

    return <div className={`${style.card} ${props.className}`}>{props.children}</div>
}

export default Card;