import React, { Component } from 'react';
import formatBytes from './format-bytes'

export default class TorrentsStatistic extends Component {
  constructor(props)
  {
    super(props)
    
    this.stats = props.stats || {}
  }
  componentDidMount()
  {
    this.newTorrentFunc = (torrent) => {
      this.stats.size += torrent.size;
      this.stats.torrents++;
      this.stats.files += torrent.files; 
      this.forceUpdate()
    }

    window.torrentSocket.on('newTorrent', this.newTorrentFunc);
  }
  componentWillUnmount()
  {
    if(this.newTorrentFunc)
      window.torrentSocket.off('newTorrent', this.newTorrentFunc);
  }
  render()
  {
    return (
      <div className='column w100p counter-statistic' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: 8, borderRadius: 4, marginTop: 2, marginBottom: 100}}>
        <div className='row w100p' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: 8, borderRadius: 4}}>
              <div className='row inline' style={{color: '#e5f442', fontSize: '1.15em', fill: '#e5f442'}}>
                <svg  viewBox="0 0 60 60">
                  <path d="M35,0C23.849,0,14.43,2.588,11.215,6.475C4.669,8.077,0.884,10.775,0.146,13.51C0.062,13.657,0,13.818,0,14v0.5V26v0.5V27
                    v11v0.5V39v12c0,0.162,0.043,0.315,0.117,0.451C1.298,56.346,11.864,60,25,60c11.24,0,20.579-2.68,23.786-6.518
                    c6.359-1.546,10.366-4.076,11.09-7C59.955,46.34,60,46.175,60,46V34v-0.5V22v-0.5v-12C60,4.895,51.238,0,35,0z M47.805,39.348
                    c-0.04,0.099-0.089,0.198-0.143,0.297c-0.067,0.123-0.142,0.246-0.231,0.369c-0.066,0.093-0.141,0.185-0.219,0.277
                    c-0.111,0.131-0.229,0.262-0.363,0.392c-0.081,0.079-0.17,0.157-0.26,0.236c-0.164,0.143-0.335,0.285-0.526,0.426
                    c-0.082,0.061-0.17,0.12-0.257,0.18c-0.226,0.156-0.462,0.311-0.721,0.463c-0.068,0.041-0.141,0.08-0.212,0.12
                    c-0.298,0.168-0.609,0.335-0.945,0.497c-0.043,0.021-0.088,0.041-0.132,0.061c-0.375,0.177-0.767,0.351-1.186,0.519
                    c-0.012,0.005-0.024,0.009-0.036,0.014c-2.271,0.907-5.176,1.67-8.561,2.17c-0.017,0.002-0.034,0.004-0.051,0.007
                    c-0.658,0.097-1.333,0.183-2.026,0.259c-0.113,0.012-0.232,0.02-0.346,0.032c-0.605,0.063-1.217,0.121-1.847,0.167
                    c-0.288,0.021-0.59,0.031-0.883,0.049c-0.474,0.028-0.943,0.059-1.429,0.076C26.637,45.984,25.827,46,25,46
                    s-1.637-0.016-2.432-0.044c-0.486-0.017-0.955-0.049-1.429-0.076c-0.293-0.017-0.595-0.028-0.883-0.049
                    c-0.63-0.046-1.242-0.104-1.847-0.167c-0.114-0.012-0.233-0.02-0.346-0.032c-0.693-0.076-1.368-0.163-2.026-0.259
                    c-0.017-0.002-0.034-0.004-0.051-0.007c-3.385-0.5-6.29-1.263-8.561-2.17c-0.012-0.004-0.024-0.009-0.036-0.014
                    c-0.419-0.168-0.812-0.342-1.186-0.519c-0.043-0.021-0.089-0.041-0.132-0.061c-0.336-0.162-0.647-0.328-0.945-0.497
                    c-0.07-0.04-0.144-0.079-0.212-0.12c-0.259-0.152-0.495-0.307-0.721-0.463c-0.086-0.06-0.175-0.119-0.257-0.18
                    c-0.191-0.141-0.362-0.283-0.526-0.426c-0.089-0.078-0.179-0.156-0.26-0.236c-0.134-0.13-0.252-0.26-0.363-0.392
                    c-0.078-0.092-0.153-0.184-0.219-0.277c-0.088-0.123-0.163-0.246-0.231-0.369c-0.054-0.099-0.102-0.198-0.143-0.297
                    c-0.049-0.121-0.088-0.242-0.116-0.363C2.041,38.823,2,38.661,2,38.5c0-0.113,0.013-0.226,0.031-0.338
                    C2.056,38.011,2.042,37.86,2,37.717v-7.424c0.028,0.026,0.063,0.051,0.092,0.077c0.218,0.192,0.44,0.383,0.69,0.567
                    C6.549,33.786,14.082,36,25,36c10.872,0,18.386-2.196,22.169-5.028c0.302-0.22,0.574-0.447,0.83-0.678L48,30.293v7.424
                    c-0.042,0.143-0.056,0.294-0.031,0.445C47.987,38.274,48,38.387,48,38.5c0,0.161-0.041,0.323-0.079,0.485
                    C47.892,39.106,47.854,39.227,47.805,39.348z M2.601,18.797c0.3,0.236,0.624,0.469,0.975,0.696c0.073,0.047,0.155,0.093,0.231,0.14
                    c0.294,0.183,0.605,0.362,0.932,0.538c0.121,0.065,0.242,0.129,0.367,0.193c0.365,0.186,0.748,0.367,1.151,0.542
                    c0.066,0.029,0.126,0.059,0.193,0.087c0.469,0.199,0.967,0.389,1.485,0.573c0.143,0.051,0.293,0.099,0.44,0.149
                    c0.412,0.139,0.838,0.272,1.279,0.401c0.159,0.046,0.315,0.094,0.478,0.138c0.585,0.162,1.189,0.316,1.823,0.458
                    c0.087,0.02,0.181,0.036,0.269,0.055c0.559,0.122,1.139,0.235,1.735,0.341c0.202,0.036,0.407,0.07,0.613,0.104
                    c0.567,0.093,1.151,0.178,1.75,0.256c0.154,0.02,0.301,0.043,0.457,0.062c0.744,0.09,1.514,0.167,2.305,0.233
                    c0.195,0.016,0.398,0.028,0.596,0.042c0.633,0.046,1.28,0.084,1.942,0.114c0.241,0.011,0.481,0.022,0.727,0.031
                    C23.212,23.979,24.09,24,25,24s1.788-0.021,2.65-0.05c0.245-0.009,0.485-0.02,0.727-0.031c0.662-0.03,1.309-0.068,1.942-0.114
                    c0.198-0.015,0.4-0.026,0.596-0.042c0.791-0.065,1.561-0.143,2.305-0.233c0.156-0.019,0.303-0.042,0.457-0.062
                    c0.599-0.078,1.182-0.163,1.75-0.256c0.206-0.034,0.411-0.068,0.613-0.104c0.596-0.106,1.176-0.219,1.735-0.341
                    c0.088-0.019,0.182-0.036,0.269-0.055c0.634-0.142,1.238-0.297,1.823-0.458c0.163-0.045,0.319-0.092,0.478-0.138
                    c0.441-0.129,0.867-0.262,1.279-0.401c0.147-0.05,0.297-0.098,0.44-0.149c0.518-0.184,1.017-0.374,1.485-0.573
                    c0.067-0.028,0.127-0.058,0.193-0.087c0.403-0.176,0.786-0.356,1.151-0.542c0.125-0.064,0.247-0.128,0.367-0.193
                    c0.327-0.175,0.638-0.354,0.932-0.538c0.076-0.047,0.158-0.093,0.231-0.14c0.351-0.227,0.675-0.459,0.975-0.696
                    c0.075-0.06,0.142-0.12,0.215-0.18c0.13-0.108,0.267-0.215,0.387-0.324v7.424c-0.042,0.143-0.056,0.294-0.031,0.445
                    C47.987,26.274,48,26.387,48,26.5c0,0.161-0.041,0.323-0.079,0.485c-0.028,0.121-0.067,0.241-0.116,0.363
                    c-0.04,0.099-0.089,0.198-0.143,0.297c-0.067,0.123-0.142,0.246-0.231,0.369c-0.066,0.093-0.141,0.185-0.219,0.277
                    c-0.111,0.131-0.229,0.262-0.363,0.392c-0.081,0.079-0.17,0.157-0.26,0.236c-0.164,0.143-0.335,0.285-0.526,0.426
                    c-0.082,0.061-0.17,0.12-0.257,0.18c-0.226,0.156-0.462,0.311-0.721,0.463c-0.068,0.041-0.141,0.08-0.212,0.12
                    c-0.298,0.168-0.609,0.335-0.945,0.497c-0.043,0.021-0.088,0.041-0.132,0.061c-0.375,0.177-0.767,0.351-1.186,0.519
                    c-0.012,0.005-0.024,0.009-0.036,0.014c-2.271,0.907-5.176,1.67-8.561,2.17c-0.017,0.002-0.034,0.004-0.051,0.007
                    c-0.658,0.097-1.333,0.183-2.026,0.259c-0.113,0.012-0.232,0.02-0.346,0.032c-0.605,0.063-1.217,0.121-1.847,0.167
                    c-0.288,0.021-0.59,0.031-0.883,0.049c-0.474,0.028-0.943,0.059-1.429,0.076C26.637,33.984,25.827,34,25,34
                    s-1.637-0.016-2.432-0.044c-0.486-0.017-0.955-0.049-1.429-0.076c-0.293-0.017-0.595-0.028-0.883-0.049
                    c-0.63-0.046-1.242-0.104-1.847-0.167c-0.114-0.012-0.233-0.02-0.346-0.032c-0.693-0.076-1.368-0.163-2.026-0.259
                    c-0.017-0.002-0.034-0.004-0.051-0.007c-3.385-0.5-6.29-1.263-8.561-2.17c-0.012-0.004-0.024-0.009-0.036-0.014
                    c-0.419-0.168-0.812-0.342-1.186-0.519c-0.043-0.021-0.089-0.041-0.132-0.061c-0.336-0.162-0.647-0.328-0.945-0.497
                    c-0.07-0.04-0.144-0.079-0.212-0.12c-0.259-0.152-0.495-0.307-0.721-0.463c-0.086-0.06-0.175-0.119-0.257-0.18
                    c-0.191-0.141-0.362-0.283-0.526-0.426c-0.089-0.078-0.179-0.156-0.26-0.236c-0.134-0.13-0.252-0.26-0.363-0.392
                    c-0.078-0.092-0.153-0.184-0.219-0.277c-0.088-0.123-0.163-0.246-0.231-0.369c-0.054-0.099-0.102-0.198-0.143-0.297
                    c-0.049-0.121-0.088-0.242-0.116-0.363C2.041,26.823,2,26.661,2,26.5c0-0.113,0.013-0.226,0.031-0.338
                    C2.056,26.011,2.042,25.86,2,25.717v-7.424c0.12,0.109,0.257,0.216,0.387,0.324C2.459,18.677,2.526,18.737,2.601,18.797z M50,39.09
                    V39v-0.5V38v-8.828c0.043-0.012,0.083-0.025,0.126-0.037c0.4-0.112,0.79-0.227,1.168-0.346c0.004-0.001,0.009-0.003,0.013-0.004
                    c2.961-0.936,5.22-2.099,6.693-3.427V33.5c0,0.116-0.015,0.232-0.035,0.349c-0.016,0.096-0.043,0.192-0.072,0.288
                    c-0.009,0.028-0.015,0.056-0.025,0.085c-0.036,0.105-0.081,0.21-0.133,0.315c-0.006,0.013-0.013,0.026-0.019,0.039
                    c-0.828,1.615-3.465,3.202-7.27,4.379C50.299,39,50.151,39.046,50,39.09z M58,13.347V21.5c0,0.116-0.015,0.232-0.035,0.349
                    c-0.016,0.096-0.043,0.192-0.072,0.288c-0.009,0.028-0.015,0.056-0.025,0.085c-0.036,0.105-0.081,0.21-0.133,0.315
                    c-0.006,0.013-0.013,0.026-0.019,0.039c-0.828,1.615-3.465,3.202-7.27,4.379C50.299,27,50.151,27.046,50,27.09V27v-0.5V26v-8.828
                    c0.084-0.023,0.161-0.049,0.244-0.072c0.23-0.065,0.454-0.133,0.677-0.2c0.189-0.057,0.378-0.115,0.561-0.174
                    c0.228-0.074,0.448-0.15,0.667-0.227c0.166-0.058,0.334-0.115,0.495-0.174c0.231-0.085,0.452-0.174,0.673-0.262
                    c0.137-0.055,0.279-0.108,0.412-0.164c0.256-0.108,0.5-0.219,0.742-0.332c0.087-0.04,0.179-0.079,0.263-0.119
                    c0.324-0.156,0.635-0.316,0.931-0.479c0.031-0.017,0.057-0.035,0.088-0.052c0.261-0.146,0.513-0.295,0.751-0.447
                    c0.084-0.054,0.159-0.109,0.24-0.163c0.176-0.117,0.35-0.235,0.512-0.356c0.089-0.066,0.169-0.134,0.253-0.201
                    c0.141-0.112,0.282-0.224,0.411-0.338C57.946,13.389,57.976,13.369,58,13.347z M35,2c13.555,0,23,3.952,23,7.5
                    c0,0.133-0.014,0.266-0.04,0.399c-0.008,0.044-0.025,0.087-0.036,0.131c-0.023,0.09-0.045,0.179-0.079,0.269
                    c-0.02,0.052-0.047,0.104-0.07,0.156c-0.037,0.081-0.073,0.162-0.119,0.243c-0.031,0.055-0.068,0.11-0.103,0.165
                    c-0.05,0.078-0.1,0.156-0.157,0.233c-0.042,0.056-0.089,0.112-0.135,0.167c-0.063,0.076-0.127,0.152-0.197,0.227
                    c-0.052,0.056-0.108,0.112-0.164,0.168c-0.075,0.074-0.153,0.149-0.236,0.223c-0.062,0.055-0.126,0.111-0.192,0.166
                    c-0.088,0.073-0.18,0.146-0.275,0.219c-0.071,0.054-0.143,0.109-0.218,0.163c-0.101,0.073-0.208,0.145-0.316,0.217
                    c-0.079,0.053-0.158,0.105-0.241,0.158c-0.116,0.073-0.237,0.145-0.36,0.216c-0.085,0.05-0.169,0.1-0.258,0.149
                    c-0.132,0.073-0.272,0.146-0.412,0.219c-0.089,0.046-0.175,0.093-0.267,0.138c-0.153,0.076-0.315,0.15-0.476,0.225
                    c-0.088,0.04-0.171,0.081-0.261,0.121c-0.213,0.094-0.434,0.187-0.659,0.278c-0.045,0.018-0.086,0.037-0.131,0.055
                    c-0.274,0.109-0.558,0.216-0.85,0.321c-0.081,0.029-0.168,0.057-0.25,0.085c-0.214,0.074-0.428,0.148-0.651,0.22
                    c-0.116,0.038-0.238,0.073-0.357,0.11c-0.161,0.05-0.322,0.099-0.487,0.147V14.5V14c0-0.113-0.027-0.22-0.065-0.322
                    c-0.014-0.04-0.027-0.078-0.046-0.115c-0.002-0.004-0.003-0.01-0.006-0.014c-0.284-1.177-1.122-2.279-2.396-3.279
                    c-0.007-0.006-0.013-0.012-0.021-0.017c-0.182-0.143-0.385-0.28-0.585-0.418c-3.547-2.511-10.075-4.479-19.335-4.786
                    C26.71,5.018,25.861,5,25,5c-0.854,0-1.703,0.017-2.545,0.048c-2.498,0.083-4.787,0.291-6.884,0.594C19.445,3.612,26.273,2,35,2z
                    M13.493,8.061c0.252-0.05,0.512-0.094,0.769-0.141c0.332-0.061,0.666-0.12,1.009-0.175c0.299-0.048,0.601-0.093,0.905-0.137
                    c0.337-0.048,0.681-0.093,1.028-0.136c0.294-0.037,0.587-0.075,0.885-0.107c0.599-0.065,1.209-0.122,1.833-0.17
                    c0.237-0.019,0.478-0.031,0.717-0.047c0.484-0.032,0.972-0.06,1.47-0.081c0.235-0.01,0.47-0.02,0.707-0.028
                    C23.534,7.017,24.258,7,25,7c0.827,0,1.637,0.016,2.433,0.044c0.48,0.017,0.943,0.048,1.411,0.075c0.3,0.017,0.607,0.029,0.902,0.05
                    c0.621,0.045,1.224,0.103,1.821,0.164c0.123,0.012,0.252,0.021,0.374,0.035c0.677,0.074,1.336,0.159,1.98,0.253
                    c0.033,0.005,0.068,0.009,0.1,0.013c3.369,0.498,6.261,1.256,8.526,2.157c0.025,0.01,0.052,0.02,0.077,0.03
                    c0.406,0.163,0.786,0.332,1.149,0.503c0.056,0.026,0.114,0.052,0.169,0.078c0.325,0.157,0.625,0.318,0.914,0.48
                    c0.08,0.045,0.164,0.09,0.241,0.136c0.249,0.147,0.477,0.296,0.696,0.447c0.095,0.065,0.191,0.131,0.28,0.197
                    c0.184,0.136,0.349,0.273,0.507,0.411c0.095,0.083,0.19,0.166,0.276,0.25c0.129,0.126,0.244,0.252,0.351,0.379
                    c0.081,0.096,0.16,0.192,0.228,0.289c0.086,0.119,0.159,0.239,0.225,0.359c0.056,0.102,0.105,0.203,0.146,0.304
                    c0.048,0.119,0.086,0.239,0.114,0.358C47.959,14.176,48,14.338,48,14.5c0,3.548-9.445,7.5-23,7.5S2,18.048,2,14.5
                    C2,12.08,6.399,9.475,13.493,8.061z M25,58c-13.036,0-22.401-3.703-22.968-7.162C2.024,50.793,2.014,50.749,2,50.707v-8.414
                    c0.028,0.026,0.063,0.051,0.092,0.077c0.218,0.192,0.44,0.383,0.69,0.567C6.549,45.786,14.082,48,25,48
                    c10.872,0,18.386-2.196,22.169-5.028c0.302-0.22,0.574-0.447,0.83-0.678L48,42.293v8.41c-0.014,0.044-0.024,0.089-0.032,0.135
                    c-0.033,0.204-0.103,0.409-0.196,0.613c-0.036,0.079-0.092,0.158-0.137,0.237C45.826,54.877,36.971,58,25,58z M57.968,45.838
                    c-0.317,1.941-3.314,3.891-7.972,5.255C49.999,51.063,50,51.031,50,51v-9.828c0.043-0.012,0.083-0.025,0.126-0.037
                    c0.4-0.112,0.79-0.227,1.168-0.346c0.004-0.001,0.009-0.003,0.013-0.004c2.961-0.936,5.22-2.099,6.693-3.427v8.346
                    C57.986,45.747,57.976,45.792,57.968,45.838z"/>
                  </svg>
                  <div style={{marginLeft: '5px'}}>{ formatBytes(this.stats.size, 1) } data</div>
                </div>

                <div className='row inline' style={{color: '#f48641', fontSize: '1.15em', fill: '#f48641', marginLeft: '20px'}}>
                <svg  viewBox="0 0 60 60">
                  <g>
                    <path d="M60,8.311c0-0.199-0.052-0.382-0.131-0.551c-0.027-0.209-0.112-0.412-0.254-0.579L53.46,0H6.54L0.384,7.182
                      C0.242,7.348,0.157,7.55,0.131,7.76C0.052,7.929,0,8.112,0,8.311V19h3v41h54V19h3V8.311z M7.46,2h45.08l4.286,5H3.174L7.46,2z
                      M55,58H5V19h50V58z M58,17h-1H3H2V9h56V17z"/>
                    <path d="M42,23H18v10h24V23z M40,31H20v-6h20V31z"/>
                    <path d="M45,38H15v14h30V38z M43,50H17V40h26V50z"/>
                    <path d="M22,48h5c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5c-0.552,0-1,0.447-1,1S21.448,48,22,48z"/>
                    <path d="M27,44h11c0.552,0,1-0.447,1-1s-0.448-1-1-1H27c-0.552,0-1,0.447-1,1S26.448,44,27,44z"/>
                    <path d="M22,44c0.26,0,0.52-0.11,0.71-0.29C22.89,43.52,23,43.26,23,43c0-0.261-0.11-0.521-0.29-0.71c-0.38-0.37-1.04-0.37-1.42,0
                      C21.11,42.479,21,42.739,21,43c0,0.27,0.11,0.52,0.29,0.71C21.48,43.89,21.73,44,22,44z"/>
                    <path d="M31.29,46.29C31.11,46.479,31,46.739,31,47c0,0.26,0.11,0.52,0.29,0.71C31.48,47.89,31.74,48,32,48
                      c0.26,0,0.52-0.11,0.71-0.29C32.89,47.52,33,47.26,33,47c0-0.261-0.11-0.521-0.29-0.71C32.34,45.92,31.66,45.92,31.29,46.29z"/>
                    <path d="M38,46h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S38.552,46,38,46z"/>
                  </g>
                  </svg>
                  <div style={{marginLeft: '5px'}}>{this.stats.torrents} torrents</div>
                </div>

                <div className='row inline' style={{color: '#f441e2', fontSize: '1.15em', fill: '#f441e2', marginLeft: '20px'}}>
                  <svg viewBox="0 0 60 60">
                    <g>
                      <path d="M42.5,22h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,22,42.5,22z"/>
                      <path d="M17.5,16h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S16.948,16,17.5,16z"/>
                      <path d="M42.5,30h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,30,42.5,30z"/>
                      <path d="M42.5,38h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,38,42.5,38z"/>
                      <path d="M42.5,46h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S43.052,46,42.5,46z"/>
                      <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z"/>
                    </g>
                  </svg>
                  <div style={{marginLeft: '5px'}}>{this.stats.files} files</div>
                </div>
        </div>

        <div className='row w100p' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: 8, borderRadius: 4, marginTop: 5}}>
                  <div className='row inline' style={{color: window.peers > 0 ? '#19c632' : 'white', fontSize: '1.15em', fill: window.peers > 0 ? '#19c632' : 'white'}}>
                  <svg viewBox="0 0 47 47">
                    <g>
                      <path d="M17.567,15.938l-2.859-2.702c0.333-0.605,0.539-1.29,0.539-2.029c0-2.342-1.897-4.239-4.24-4.239
                        c-2.343,0-4.243,1.896-4.243,4.239c0,2.343,1.9,4.241,4.243,4.241c0.826,0,1.59-0.246,2.242-0.654l2.855,2.699
                        C16.536,16.922,17.023,16.399,17.567,15.938z"/>
                      <path d="M29.66,15.6l3.799-6.393c0.374,0.107,0.762,0.184,1.169,0.184c2.347,0,4.244-1.898,4.244-4.241
                        c0-2.342-1.897-4.239-4.244-4.239c-2.343,0-4.239,1.896-4.239,4.239c0,1.163,0.469,2.214,1.227,2.981l-3.787,6.375
                        C28.48,14.801,29.094,15.169,29.66,15.6z"/>
                      <path d="M42.762,20.952c-1.824,0-3.369,1.159-3.968,2.775l-5.278-0.521c0,0.04,0.006,0.078,0.006,0.117
                        c0,0.688-0.076,1.36-0.213,2.009l5.276,0.521c0.319,2.024,2.062,3.576,4.177,3.576c2.342,0,4.238-1.896,4.238-4.238
                        C47,22.85,45.104,20.952,42.762,20.952z"/>
                      <path d="M28.197,37.624l-1.18-5.156c-0.666,0.232-1.359,0.398-2.082,0.481l1.182,5.157c-1.355,0.709-2.29,2.11-2.29,3.746
                        c0,2.342,1.896,4.237,4.243,4.237c2.342,0,4.238-1.896,4.238-4.237C32.311,39.553,30.479,37.692,28.197,37.624z"/>
                      <path d="M14.357,25.37l-6.57,2.201c-0.758-1.158-2.063-1.926-3.548-1.926C1.896,25.645,0,27.542,0,29.884
                        c0,2.345,1.896,4.242,4.239,4.242c2.341,0,4.242-1.897,4.242-4.242c0-0.098-0.021-0.188-0.029-0.284l6.591-2.207
                        C14.746,26.752,14.51,26.077,14.357,25.37z"/>
                      <circle cx="23.83" cy="23.323" r="7.271"/>
                    </g>
                  </svg>
                  <div style={{marginLeft: '5px'}}>{window.peers} peers</div>
                </div>

                <div className='row inline' style={{color: window.peersTorrents > 0 ? '#19c687' : 'white', fontSize: '1.15em', fill: window.peersTorrents > 0 ? '#19c687' : 'white', marginLeft: '20px'}}>
                  <svg viewBox="0 0 481.6 481.6">
                    <g>
                      <path d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8
                        c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5
                        l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9
                        l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1
                        c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100,299.8
                        c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.5,299.8,100,299.8z M381.6,454.5
                        c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z"/>
                    </g>
                  </svg>
                  <div style={{marginLeft: '5px'}}>{window.peersTorrents} remote torrents</div>
                </div>

                <div className='row inline' style={{color: window.p2pStatus == 2 ? '#78c619' : (window.p2pStatus == 1 ? '#c68319' : '#c6194a'), fontSize: '1.15em', fill: window.p2pStatus == 2 ? '#78c619' : (window.p2pStatus == 1 ? '#c68319' : '#c6194a'), marginLeft: '20px'}}>
                {
                    window.p2pStatus == 0
                    &&
                    <div className='row inline w100p'>
                      <svg viewBox="0 0 54.908 54.908">
                      <g>
                        <path d="M54.615,19.123c-7.243-7.244-16.89-11.233-27.161-11.233S7.537,11.878,0.293,19.123c-0.391,0.391-0.391,1.023,0,1.414
                          s1.023,0.391,1.414,0C8.573,13.67,17.717,9.889,27.454,9.889s18.881,3.781,25.747,10.647c0.195,0.195,0.451,0.293,0.707,0.293
                          s0.512-0.098,0.707-0.293C55.006,20.146,55.006,19.513,54.615,19.123z"/>
                        <path d="M6.171,25c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                          c10.955-10.956,28.781-10.956,39.737,0c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414C37.002,13.266,17.907,13.264,6.171,25
                          z"/>
                        <path d="M27.454,24.508c-5.825,0-11.295,2.263-15.404,6.371c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0
                          c3.731-3.73,8.699-5.785,13.99-5.785c5.291,0,10.259,2.055,13.99,5.785c0.195,0.195,0.451,0.293,0.707,0.293
                          s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414C38.75,26.771,33.279,24.508,27.454,24.508z"/>
                        <path d="M27.454,33.916c-3.612,0-6.551,2.939-6.551,6.552s2.939,6.552,6.551,6.552c3.613,0,6.552-2.939,6.552-6.552
                          S31.067,33.916,27.454,33.916z M27.454,45.019c-2.51,0-4.551-2.042-4.551-4.552s2.042-4.552,4.551-4.552s4.552,2.042,4.552,4.552
                          S29.964,45.019,27.454,45.019z"/>
                      </g>
                      </svg>
                      <div style={{marginLeft: '5px'}}>not available</div>
                    </div>
                }
                {
                    window.p2pStatus == 1
                    &&
                    <div className='row inline w100p'>
                      <svg viewBox="0 0 611.989 611.988">
                          <g>
                            <path d="M305.994,417.769c-30.85,0-55.887,25.037-55.887,55.887s25.038,55.887,55.887,55.887s55.887-25.037,55.887-55.887
                              S336.843,417.769,305.994,417.769z M605.436,222.369C530.697,133.434,421.549,82.446,305.994,82.446
                              S81.309,133.434,6.551,222.369c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.587,6.558,17.939,6.558
                              c7.973,0,15.891-3.391,21.423-9.967c64.084-76.248,157.639-119.989,256.652-119.989c99.013,0,192.568,43.741,256.651,119.971
                              c5.533,6.576,13.45,9.967,21.424,9.967c6.353,0,12.724-2.143,17.958-6.558C613.837,251.802,615.366,234.161,605.436,222.369z
                              M305.994,194.22c-82.545,0-160.489,36.419-213.879,99.926c-9.929,11.811-8.402,29.434,3.428,39.363
                              c5.234,4.396,11.605,6.558,17.958,6.558c7.973,0,15.891-3.391,21.405-9.967c42.716-50.838,105.086-79.993,171.089-79.993
                              c66.003,0,128.372,29.155,171.107,79.993c5.533,6.595,13.45,9.967,21.404,9.967c6.353,0,12.724-2.143,17.959-6.558
                              c11.829-9.929,13.356-27.57,3.428-39.363C466.483,230.64,388.539,194.22,305.994,194.22z M305.994,305.994
                              c-49.553,0-96.331,21.852-128.335,59.948c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.605,6.557,17.958,6.557
                              c7.973,0,15.891-3.39,21.405-9.966c21.368-25.429,52.552-40.016,85.544-40.016s64.177,14.587,85.544,40.016
                              c5.533,6.595,13.45,9.966,21.405,9.966c6.353,0,12.724-2.142,17.958-6.557c11.83-9.93,13.357-27.553,3.428-39.363
                              C402.324,327.846,355.546,305.994,305.994,305.994z"/>
                          </g>
                      </svg>
                      <div style={{marginLeft: '5px'}}>redirect</div>
                    </div>
                  }
                  {
                    window.p2pStatus == 2
                    &&
                    <div className='row inline w100p'>
                      <svg viewBox="0 0 611.989 611.988">
                          <g>
                            <path d="M305.994,417.769c-30.85,0-55.887,25.037-55.887,55.887s25.038,55.887,55.887,55.887s55.887-25.037,55.887-55.887
                              S336.843,417.769,305.994,417.769z M605.436,222.369C530.697,133.434,421.549,82.446,305.994,82.446
                              S81.309,133.434,6.551,222.369c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.587,6.558,17.939,6.558
                              c7.973,0,15.891-3.391,21.423-9.967c64.084-76.248,157.639-119.989,256.652-119.989c99.013,0,192.568,43.741,256.651,119.971
                              c5.533,6.576,13.45,9.967,21.424,9.967c6.353,0,12.724-2.143,17.958-6.558C613.837,251.802,615.366,234.161,605.436,222.369z
                              M305.994,194.22c-82.545,0-160.489,36.419-213.879,99.926c-9.929,11.811-8.402,29.434,3.428,39.363
                              c5.234,4.396,11.605,6.558,17.958,6.558c7.973,0,15.891-3.391,21.405-9.967c42.716-50.838,105.086-79.993,171.089-79.993
                              c66.003,0,128.372,29.155,171.107,79.993c5.533,6.595,13.45,9.967,21.404,9.967c6.353,0,12.724-2.143,17.959-6.558
                              c11.829-9.929,13.356-27.57,3.428-39.363C466.483,230.64,388.539,194.22,305.994,194.22z M305.994,305.994
                              c-49.553,0-96.331,21.852-128.335,59.948c-9.93,11.811-8.402,29.434,3.428,39.363c5.234,4.396,11.605,6.557,17.958,6.557
                              c7.973,0,15.891-3.39,21.405-9.966c21.368-25.429,52.552-40.016,85.544-40.016s64.177,14.587,85.544,40.016
                              c5.533,6.595,13.45,9.966,21.405,9.966c6.353,0,12.724-2.142,17.958-6.557c11.83-9.93,13.357-27.553,3.428-39.363
                              C402.324,327.846,355.546,305.994,305.994,305.994z"/>
                          </g>
                      </svg>
                      <div style={{marginLeft: '5px'}}>direct</div>
                    </div>
                  }
                </div>
        </div>
                
      </div>
    )
  }
}