from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()
engine = create_engine('sqlite:///trivia.db')
Session = sessionmaker(bind=engine)

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, unique=True)
    username = Column(String)
    full_name = Column(String)
    language = Column(String)  # 'kz' or 'ru'

class Question(Base):
    __tablename__ = 'questions'
    id = Column(Integer, primary_key=True)
    question = Column(String)
    option1 = Column(String)
    option2 = Column(String)
    option3 = Column(String)
    correct = Column(Integer)  # 0, 1, or 2

class Advertisement(Base):
    __tablename__ = 'ads'
    id = Column(Integer, primary_key=True)
    video_url = Column(String)
    company_name = Column(String)

class GameStat(Base):
    __tablename__ = 'game_stats'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.user_id'))
    score = Column(Integer)
    ads_watched = Column(Integer)
    is_winner = Column(Boolean)

Base.metadata.create_all(engine)