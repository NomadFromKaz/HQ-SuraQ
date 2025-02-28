from flask import Flask, render_template, request
from flask_basicauth import BasicAuth
from database import Session, User, Question, Advertisement, GameStat

app = Flask(__name__)
app.config['BASIC_AUTH_USERNAME'] = 'admin'
app.config['BASIC_AUTH_PASSWORD'] = 'admin123'
basic_auth = BasicAuth(app)

@app.route('/')
@basic_auth.required
def dashboard():
    session = Session()
    stats = session.query(GameStat).all()
    users = session.query(User).count()
    ads = session.query(Advertisement).count()
    winners = session.query(GameStat).filter_by(is_winner=True).count()
    session.close()
    return render_template('dashboard.html', stats=stats, users=users, ads=ads, winners=winners)

if __name__ == '__main__':
    app.run(debug=True)