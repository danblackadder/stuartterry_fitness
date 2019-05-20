// Article.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postArticle,
  updateArticle,
  publishArticle,
  getArticlesAdmin,
  getArticle,
  deleteArticle,
} from '../../actions/article';
import { getImages } from '../../actions/image';
import classnames from 'classnames';
import RichTextEditor from 'react-rte-image';
import HorizontalScroll from 'react-scroll-horizontal';
import Truncate from 'react-truncate-html';

import {
  MdModeEdit,
  MdDelete,
  MdPublish,
  MdDone,
  MdRemoveRedEye,
} from 'react-icons/md';
import ArticleImage from './ArticleImages';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      content: RichTextEditor.createEmptyValue(),
      img: '',
      errors: {},
      editor: false,
      editArticle: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    this.props.getArticlesAdmin().then(res => {
      console.log(this.props.articles);
    });
    this.props.getImages();
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleContentChange(value) {
    this.setState({
      content: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const article = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content.toString('html'),
      img: this.state.img,
    };
    !this.state.editArticle
      ? this.props.postArticle(article).then(res => {
          if (res) {
            this.setState({
              id: '',
              title: '',
              content: RichTextEditor.createEmptyValue(),
              img: '',
              errors: {},
              editor: false,
            });
            this.props.getArticlesAdmin();
          } else {
            window.scrollTo(0, 0);
          }
        })
      : this.props.updateArticle(article.id, article).then(res => {
          if (res) {
            this.setState({
              id: '',
              title: '',
              content: RichTextEditor.createEmptyValue(),
              img: '',
              errors: {},
              editor: false,
              editArticle: false,
            });
            this.props.getArticlesAdmin();
          } else {
            window.scrollTo(0, 0);
          }
        });
  }

  handleDelete(id) {
    var confirm = window.confirm(
      'Are you sure you want to delete this blog post?',
    );
    if (confirm) {
      this.props.deleteArticle(id).then(res => {
        this.props.getArticlesAdmin();
      });
    }
  }

  handleEdit(id) {
    this.props.getArticle(id).then(res => {
      this.setState({
        id: res._id,
        title: res.title,
        content: RichTextEditor.createValueFromString(res.content, 'html'),
        img: res.img,
        editor: true,
        editArticle: true,
      });
    });
  }

  handlePublish(id) {
    this.props.publishArticle(id).then(res => {
      this.props.getArticlesAdmin();
    });
  }

  handleAddNew() {
    this.setState({
      editor: true,
    });
  }

  handleCancel() {
    this.setState({
      id: '',
      title: '',
      content: RichTextEditor.createEmptyValue(),
      img: '',
      errors: {},
      editor: false,
    });
  }

  handleImageChange(image) {
    this.setState({
      img: '/uploads/' + image,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;

    const toolbarConfig = {
      // Optionally specify the groups to display (displayed in the order listed).
      display: [
        'INLINE_STYLE_BUTTONS',
        'BLOCK_TYPE_BUTTONS',
        'LINK_BUTTONS',
        'IMAGE_BUTTON',
        'BLOCK_TYPE_DROPDOWN',
        'HISTORY_BUTTONS',
      ],
      INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'editor-btn' },
        { label: 'Italic', style: 'ITALIC', className: 'editor-btn' },
        {
          label: 'Underline',
          style: 'UNDERLINE',
          className: 'editor-btn',
        },
      ],
      BLOCK_TYPE_DROPDOWN: [
        { label: 'Normal', style: 'unstyled' },
        { label: 'Heading Large', style: 'header-one' },
        { label: 'Heading Medium', style: 'header-two' },
        { label: 'Heading Small', style: 'header-three' },
      ],
      BLOCK_TYPE_BUTTONS: [
        {
          label: 'Unordered List',
          style: 'unordered-list-item',
          className: 'editor-btn',
        },
        {
          label: 'Ordered List',
          style: 'ordered-list-item',
          className: 'editor-btn',
        },
      ],
    };

    const editor = (
      <form onSubmit={this.handleSubmit} className="flex-column full-width">
        <div className="margin-top-large">
          {errors.title && <div className="danger">{errors.title}</div>}
          <input
            type="title"
            placeholder="Title"
            className="padding-small full-width"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </div>
        <div
          className="full-width flex-center background-secondary overflow-hidden margin-vertical"
          style={{ height: 240 + 'px' }}>
          {this.state.img ? (
            <img src={this.state.img} alt="" className="full-width" />
          ) : (
            <div>Click below to choose main image</div>
          )}
        </div>
        {this.props.images.length > 3 ? (
          <div
            className="flex-row background-secondary padding-vertical"
            style={{ height: 315 + 'px' }}>
            <HorizontalScroll reverseScroll={true}>
              {Object.keys(this.props.images).map(i => (
                <ArticleImage
                  id={this.props.images[i]._id}
                  location={this.props.images[i].location}
                  name={this.props.images[i].name}
                  handleImageChange={this.handleImageChange}
                  key={this.props.images[i]._id}
                />
              ))}
            </HorizontalScroll>
          </div>
        ) : (
          <div className="flex-row background-secondary padding-vertical">
            {Object.keys(this.props.images).map(i => (
              <ArticleImage
                id={this.props.images[i]._id}
                location={this.props.images[i].location}
                name={this.props.images[i].name}
                handleImageChange={this.handleImageChange}
                key={this.props.images[i]._id}
              />
            ))}
          </div>
        )}
        <div className="margin-top">
          {errors.content && <div className="danger">{errors.content}</div>}
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            name="content"
            onChange={this.handleContentChange}
            value={this.state.content}
            placeholder="Content..."
          />
        </div>
        <div className="full-width margin-top">
          <div className="flex-row justify-space-between">
            <div onClick={this.handleCancel} className="padding-vertical">
              <h3 className="cursor-pointer">Cancel</h3>
            </div>
            <button
              type="submit"
              className="padding-vertical padding-horizontal-large border background-transparent white cursor-pointer">
              <h3>Submit</h3>
            </button>
          </div>
        </div>
      </form>
    );

    const articles = (
      <div>
        <div
          className="margin-vertical-large cursor-pointer"
          onClick={this.handleAddNew}>
          Add New
        </div>
        {this.props.articles
          ? Object.keys(this.props.articles).map(i => (
              <div
                key={this.props.articles[i]._id}
                className="flex-row margin-vertical-large">
                <div
                  className="margin relative"
                  style={{
                    height: 280 + 'px',
                    width: 280 + 'px',
                  }}>
                  <div
                    className="overflow-hidden background-secondary"
                    style={{
                      height: 280 + 'px',
                      width: 280 + 'px',
                    }}>
                    <img
                      alt={this.props.articles[i].title}
                      src={this.props.articles[i].img}
                      className="relative"
                      style={{
                        height: 130 + 'px',
                        top: 50 + '%',
                        left: 50 + '%',
                        transform: 'translateY(-50%) translateX(-50%)',
                      }}
                    />
                  </div>
                  <div
                    className="background-primary absolute flex-column flex-center"
                    style={{
                      height: 80 + 'px',
                      width: 80 + 'px',
                      bottom: -10 + 'px',
                      left: -10 + 'px',
                    }}>
                    <div>{this.props.articles[i].createdDate.slice(8, 10)}</div>
                    <div>{this.props.articles[i].createdDate.slice(5, 7)}</div>
                  </div>
                </div>
                <div className="flex-row flex-1">
                  <div className="flex-column flex-1 relative padding">
                    <h3 className="margin-bottom-small">
                      {this.props.articles[i].title}
                    </h3>
                    <Truncate
                      lines={8}
                      dangerouslySetInnerHTML={{
                        __html: this.props.articles[i].content,
                      }}
                    />
                  </div>
                  <div className="flex-column justify-space-between">
                    <div>
                      {!this.props.articles[i].published ? (
                        <button
                          onClick={id =>
                            this.handlePublish(this.props.articles[i]._id)
                          }
                          className="background-secondary border cursor-pointer"
                          style={{ height: 50 + 'px', width: 50 + 'px' }}>
                          <MdPublish size="2em" color="#fff" className="fill-primary-hover" />
                        </button>
                      ) : (
                        <button
                          onClick={id =>
                            this.handlePublish(this.props.articles[i]._id)
                          }
                          className="background-secondary border cursor-pointer"
                          style={{ height: 50 + 'px', width: 50 + 'px' }}>
                          <MdDone size="2em" color="#6e8e2f" className="fill-danger-hover" />
                        </button>
                      )}
                    </div>

                    <div className="flex-column">
                      <button
                        onClick={() =>
                          window.open(
                            '/blog/' + this.props.articles[i].title,
                            '_blank',
                          )
                        }
                        className="background-secondary border margin-bottom-small cursor-pointer"
                        style={{ height: 50 + 'px', width: 50 + 'px' }}>
                        <MdRemoveRedEye size="2em" color="#fff" className="fill-primary-hover" />
                      </button>
                      <button
                        onClick={id =>
                          this.handleEdit(this.props.articles[i]._id)
                        }
                        className="background-secondary border margin-bottom-small cursor-pointer"
                        style={{ height: 50 + 'px', width: 50 + 'px' }}>
                        <MdModeEdit size="2em" color="#fff" className="fill-primary-hover" />
                      </button>
                      <button
                        onClick={id =>
                          this.handleDelete(this.props.articles[i]._id)
                        }
                        className="background-secondary border cursor-pointer"
                        style={{ height: 50 + 'px', width: 50 + 'px' }}>
                        <MdDelete size="2em" color="#fff" className="fill-danger-hover" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    );

    return (
      <div className="container padding-large">
        <h1>Blog</h1>
        {this.state.editor ? editor : articles}
      </div>
    );
  }
}

Article.propTypes = {
  postArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  publishArticle: PropTypes.func.isRequired,
  getArticlesAdmin: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  getImages: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  articles: state.articles,
  images: state.images,
});

export default connect(
  mapStateToProps,
  {
    postArticle,
    updateArticle,
    publishArticle,
    getArticlesAdmin,
    getArticle,
    deleteArticle,
    getImages,
  },
)(Article);
