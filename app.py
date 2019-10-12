from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///test.db'
db = SQLAlchemy(app)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    room = db.Column(db.Integer)
    pNumber = db.Column(db.String(10))
    aNumber = db.Column(db.String(10))
    # hostel = db.Column(db.String(100))
    food = db.Column(db.String(100))
    quantity = db.Column(db.Integer)
    status = db.Column(db.Integer)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Order %r>' % self.name

@app.route('/', methods=['POST','GET'])
def index():
    if request.method == 'POST' :
        order_name = request.form['Name']
        order_room = request.form['Room']
        order_pnumber = request.form['phone']
        order_anumber = request.form['aphone']
        # order_hostel = request.form[]

        final_order = Order(name=order_name, pNumber=order_pnumber, room=order_room, aNumber=order_anumber )
        # user_number = Order(pNumber=order_pnumber)
        # user_room = Order(room=order_room)
        # order_anumber = request.form['aphone']
        # user_anumber = Order(aNumber=order_anumber)

        # print('request form: {}'.format(request.form))

        # try :
        db.session.add(final_order)
        db.session.commit()
        all_orders = Order.query.order_by(Order.date_created).all()
        print (all_orders)
        return render_template('chart.html', all_orders=all_orders )

        # except Exception as e:
        #     print(e)
        #     return "There was an issue adding your order"

    else:
        all_orders = Order.query.order_by(Order.date_created).all()
        return render_template('index.html', all_orders=all_orders)
   
@app.route('/chart', methods=['POST','GET'])
def masterchart():
    return ('chart.html')


if __name__ == "__main__":
    app.run(debug=True)