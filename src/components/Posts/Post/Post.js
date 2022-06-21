import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../../../actions/posts'
function Post({ post, setCurrentId}) {

  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
        <div className={classes.overlay2}>
          <Button style={{color: 'white'}} size="small" onClick={() =>  setCurrentId(post._id)}>
            <MoreHorizonIcon fontSize='medium'/>
          </Button>
        </div>

        <div className={classes.details}>
          <Typography color='textSecondary' variant='body2'>{post.tags.map((tags) => `#${tags} `)}</Typography>
        </div>
        <Typography gutterBottom variant='h5' className={classes.title}>{post.title}</Typography>
        <CardContent>
        <Typography variant='body2' color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" onClick={() => dispatch(likePost(post._id))}>
            <FavoriteIcon style={{color: 'red'}} fontSize='small' />
            &nbsp; &nbsp;
            {post.likeCount}
          </Button>
          <Button size="small" color='primary' onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        </CardActions>
    </Card>
  )
}

export default Post