import {useEffect, useState} from 'react';
import {Comment} from '../Comment/Comment';
import {commentsService} from '../../services';

export const Comments = () => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getAllComments().then(value => value.slice(0, 10)).then(value => setComments(value));
    }, []);

    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key={comment.name} comment={comment}/>)
            }
        </div>
    );
}