
var getters = {
  PM_ID: state => state.user.PM_ID,
  // PMDeviceID: state => state.user.PMDeviceID,
  PMSessionId: state => state.user.PM_Session_Id,
  PFSeriesIndexId: state => state.movieInfo.PFSeriesIndexId,
  PFSeriesIndex: state => state.movieInfo.PFSeriesIndex,
  PMSeasonId: state => state.movieInfo.PMSeasonId,
  PMSeasonIndex: state => state.movieInfo.PMSeasonIndex,
  PMMovieSeasonId: state => state.movieInfo.PMMovieSeasonId,
  PMQualityIndex: state => state.movieInfo.PMQualityIndex,
  errorLogs: state => state.errorLog.logs,
  moreData: state => state.moreData.moreData,
  viewSource: state => state.log.viewSource,
  // PMMovieInfos: state => state.movieInfo.PMMovieInfos
}
export default getters
