import MainView from './MainView';
import React from 'react';
import Filter from './Filter';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_AUTHOR_FILTER
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.articleList,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickFilter: (pager, payload) =>
    dispatch({ type: APPLY_AUTHOR_FILTER, pager, payload }),
  onLoad: (pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  constructor() {
    super();

    this.changeSorting = this.changeSorting.bind(this);
    this.state = { sort: 'desc' };
  }

  componentWillMount() {
    const articlesPromise = agent.Articles.bySort;

    this.props.onLoad(articlesPromise,
      Promise.all([
        agent.Articles.bySort(this.state.sort),
        agent.Profile.all()
      ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  changeSorting() {
    let s = this.state.sort;
    s = s === 'desc' ? s = 'asc' : s = 'desc';
    this.setState({sort: s});

    this.props.onLoad(agent.Articles.bySort,
      Promise.all([agent.Articles.bySort(this.state.sort), agent.Profile.all()]));
  }

  render() {

    return (
      <div className="home-page">

        <div className="container page">
          <button onClick={this.changeSorting} className='btn btn-primary'>
            Sort
          </button>
          <br/> <br/>

          <Filter
            users={this.props.users}
            onClickFilter={this.props.onClickFilter} />

          <div className="row">
            <MainView />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
