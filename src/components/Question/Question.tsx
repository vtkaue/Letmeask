import { ReactNode} from 'react'
import cx from 'classnames'

import './question.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({ 
  content, 
  author, 
  isAnswered = false, 
  isHighlighted = false, 
  children 
}: QuestionProps) {
  return (
    <div 
    className={cx(
      'question',
      { answered: isAnswered }, // a classe só sera aplicada caso o booleano retorne true
      { highlighted: isHighlighted && !isAnswered } // a classe só sera aplicada caso o booleano retorne true
    )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}