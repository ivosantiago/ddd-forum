
import React from 'react';
import { IForumOperations } from '../redux/operators';
import { ForumState } from '../redux/states';

interface withVotingProps extends IForumOperations {
  users: ForumState;
}

function withVoting (WrappedComponent: any) {
  class HOC extends React.Component<withVotingProps, any> {
    constructor (props: withVotingProps) {
      super(props)
    }

    handleUpvoteComment (commentId: string) {
      this.props.upvoteComment(commentId);
    }

    handleDownvoteComment (commentId: string) {
      this.props.downvoteComment(commentId);
    }

    handleUpvotePost (postSlug: string) {
      this.props.upvotePost(postSlug)
    }

    handleDownvotePost (postSlug: string) {
      this.props.downvotePost(postSlug);
    }

    render () {
      return (
        <WrappedComponent
        // @ts-ignore
          upvoteComment={(commentId: string) => this.handleUpvoteComment(commentId)}
          // @ts-ignore
          downvoteComment={(commentId: string) => this.handleDownvoteComment(commentId)}
          // @ts-ignore
          upvotePost={(slug: string) => this.handleUpvotePost(slug)}
          // @ts-ignore
          downvotePost={(slug: string) => this.handleDownvotePost(slug)}
          {...this.props}
        />
      );
    }
  }
  return HOC;
}

export default withVoting;