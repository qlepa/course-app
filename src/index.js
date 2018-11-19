import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam"
                               date="Today at 4:45PM"
                               comment="Yo Yo Yo!"
                               image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex"
                               date="Today at 2:00AM"
                               comment="Bla bla bla..."
                               image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane"
                               date="Yesterday at 5:00PM"
                               comment="What a great blog!"
                               image={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Tom"
                               date="Yesterday at 6:00PM"
                               comment="Doh!"
                               image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);