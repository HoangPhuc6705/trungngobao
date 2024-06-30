import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './todo.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


function Empty({ onClose }) {
    return (
        <div className={styles.container__empty}>
            <p>
                Chưa có dự định nào cả
            </p>
            <p>
                Hãy thêm ngay!
            </p>
            <div
                onClick={onClose}
                style={{
                    cursor: 'pointer'
                }}>
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    style={{ transform: 'scale(1.3)', opacity: '0.5' }} />
            </div>
        </div>
    )
}

function TodoPopup({ onClose, onTodo }) {
    const [todo, setTodo] = useState('');

    function handleSubmit(event) {
        if (event.key == 'Enter') {
            onTodo(todo);
        }
    }

    // useEffect(() => {
    //     console.log(todo)
    // }, [todo])

    // Tí nữa chỗ này comment lại chứ không loz Trung nó hỏi chấm là chết tao luôn :))))))
    // Vai loz enter deo truyen dc prop vai l
    // useEffect(() => {
    //     window.addEventListener('keydown', handleSubmit)

    //     return () => window.removeEventListener('keydowm', handleSubmit);
    // }, []);

    return (
        <div className={styles.todoPopup}>
            <div className={styles.todoPopup__setup}>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                    }}>
                    <textarea
                        className={styles.field}
                        placeholder='Dự định của bạn là gì...'
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                    ></textarea>
                </form>
            </div>
            <div className={styles.todoPopup__confirm}>
                <div>
                    <button
                        onClick={onClose}
                        style={{
                            background: '#E72929'
                        }}>Huỷ</button>
                    <button onClick={() => {
                        onTodo(todo)
                    }}
                        style={{
                            background: '#3DC2EC',
                        }}>Xác nhận</button>
                </div>
            </div>
        </div>
    )
}

function TodoList({ todo }) {
    return (
        <div className={styles.container__todolist}>
            {todo.map((value, key) => (
                <div
                    key={key}
                    className={styles.container__todoList__list}>
                    <p>{value.title}</p>
                </div>
            ))}
        </div>
    )
}

export default function Wish() {
    const [empty, setEmpty] = useState(true);
    const [todo, setTodo] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    function handleClose() {
        setShow(!show);
    }

    function handleTodo(value) {
        handleClose();
        setId(id + 1);
        setTodo([...todo, {
            id: id,
            title: value,
            complete: false
        }])
    }

    useEffect(() => {
        console.log(todo)
        if (todo.length > 0) {
            setEmpty(false);
        } else {
            setEmpty(true);
        }
    }, [todo])

    return (
        <>
            <div className={styles.container}>
                {empty ? <Empty onClose={handleClose} /> : <TodoList todo={todo} />}
                <div className={styles.manageTodo}>
                    <button
                        className={styles.manageTodo__add}
                        onClick={() => setShow(!show)}>
                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span>
                            Mới
                        </span>
                    </button>
                </div>
            </div>
            <div
                className='overlay'
                style={show ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }}
                onClick={() => setShow(!show)}></div>
            {!show || <TodoPopup onClose={handleClose} onTodo={handleTodo} />}
        </>
    )
}