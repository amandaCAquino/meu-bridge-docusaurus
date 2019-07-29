/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentações</h5>
            <a href="https://doc.esusab.ufsc.br/" target="_blank" 
                rel="noreferrer noopener">
              E-susab
            </a>
            <a href="https://doc.sismob.ufsc.br/" target="_blank" 
                rel="noreferrer noopener">
              Sismob
            </a>
            <a href="https://doc.rni.ufsc.br/" target="_blank" 
                rel="noreferrer noopener">
              RNI
            </a>
            <a href="https://doc.meu.bridge.ufsc.br/" target="_blank" 
                rel="noreferrer noopener">
              Meu bridge
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://www.facebook.com/laboratoriobridge/" 
                target="_blank" 
                rel="noreferrer noopener">Facebook</a>
            <a href="https://www.linkedin.com/company/laboratório-bridge"
                target="_blank" 
                rel="noreferrer noopener">Linkedin</a>
            <a href="https://github.com/laboratorioBridge"
               target="_blank"
              rel="noreferrer noopener">GitHub</a>
           
            
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        <a
          href="https://bridge.ufsc.br/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/bridge-logo-sm.png`}
            alt="Laboratório Bridge"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
