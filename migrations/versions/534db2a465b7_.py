"""empty message

Revision ID: 534db2a465b7
Revises: 
Create Date: 2023-01-02 12:09:54.460573

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '534db2a465b7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('test_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('role', sa.String(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('tabla_clasificadora',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('horas', sa.String(), nullable=True),
    sa.Column('fecha', sa.String(), nullable=True),
    sa.Column('cajas', sa.String(), nullable=True),
    sa.Column('articulo', sa.String(), nullable=True),
    sa.Column('lote', sa.String(), nullable=False),
    sa.Column('jaulas', sa.String(), nullable=False),
    sa.Column('pedido', sa.String(), nullable=False),
    sa.Column('personal', sa.String(), nullable=False),
    sa.Column('problema', sa.String(), nullable=False),
    sa.Column('accion', sa.String(), nullable=False),
    sa.Column('tiempo', sa.Float(), nullable=False),
    sa.Column('velocidad', sa.Float(), nullable=True),
    sa.Column('gramos', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('articulo'),
    sa.UniqueConstraint('id'),
    sa.UniqueConstraint('jaulas'),
    sa.UniqueConstraint('lote'),
    sa.UniqueConstraint('pedido')
    )
    op.create_table('tabla_mecanico',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('problema', sa.String(), nullable=True),
    sa.Column('accion', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('accion'),
    sa.UniqueConstraint('id'),
    sa.UniqueConstraint('problema')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tabla_mecanico')
    op.drop_table('tabla_clasificadora')
    op.drop_table('user')
    op.drop_table('test_table')
    # ### end Alembic commands ###
