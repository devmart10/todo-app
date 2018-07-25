from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo-app.db'
db = SQLAlchemy(app)

ma = Marshmallow(app)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(120))
    due_date = db.Column(db.String(100))
    created_date = db.Column(db.String(100), nullable=False)
    created_by = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(100), nullable=False)
    # label = db.Column(db.Integer, db.ForeignKey('Label.id'))

    def __repr__(self):
        return '<Task %s>' % self.id

class TaskSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'due_date', 'created_date', 'created_by', 'status')

task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)

class Label(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    color = db.Column(db.String(20), unique=False, nullable=False)

# db.drop_all()
db.create_all()

@app.route('/')
def index():
    return '200'

@app.route('/tasks', methods=['POST'])
def task_create():
    json = request.json
    if 'name' not in json: return '400'

    new_task = Task(name=json.get('name'))
    new_task.created_date = '2018-7-18'
    new_task.created_by = 'devmart10'
    new_task.status = 'open'
    # new_task.label = json.get('label', '')

    db.session.add(new_task)
    db.session.commit()

    app.logger.info(new_task)
    return '200'

@app.route('/tasks', methods=['GET'])
def task_read():
    all_tasks = Task.query.all()
    result = tasks_schema.dump(all_tasks)
    return jsonify({'tasks': result.data})

@app.route('/tasks/<int:task_id>', methods=['PUT'])
def task_update(task_id):
    task = Task.query.get(task_id)

    json = request.json

    task.name = json.get('name', task.get('name'))
    task.description = json.get('description', task.get('description'))
    task.due_date = json.get('due_date', task.get('due_date'))
    # task.label = json.get('label', task.get('label'))

    db.session.commit()

    app.logger.info(task)
    return '201'

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def task_delete(task_id):
    task = Task.query.get(task_id)
    db.session.delete(task)
    db.session.commit()

    app.logger.info(task)
    return '202'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
