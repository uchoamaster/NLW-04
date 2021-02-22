interface ButtonProps {
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    return(
        <button type="button" style={{backgroundColor: props.color}}>
            {/* {props.color} */}
            {props.children}
        </button>
    );
}